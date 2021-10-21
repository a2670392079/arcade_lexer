import { Token, Tools } from './arcade_define';
// Lexical analyzer
import {flowModel, DFA_STATE_CONST, ENUM_STATE} from './arcade_define';

class Lexer {
    public ISR = {
        props: <Record<string, any>>{
            stream: "", // Character stream
            length: 0, // Length of character stream
            seq: 0, // The sequence number of the character stream
        },
        propsChange: {
            set:(prop:string, value:any)=> {
                if (typeof this.ISR.props[prop] !== "undefined") {
                    this.ISR.props[prop] = value;
                }
            },
            incrSeq:()=> {
                this.ISR.props.seq++;
            },
            toDefault:()=> {
                this.ISR.props.stream = '';
                this.ISR.props.length = 0;
                this.ISR.props.seq = 0;
            },
        },

        before:(stream:string) => {
            // Determine character stream
            this.ISR.propsChange.set('stream', stream);

            // Replace multiple line feeds with one line feed
            this.ISR.propsChange.set('stream', this.ISR.props.stream.replace(/\n+/g, "\n").trim());

            // Calculate character stream length and sequence number
            this.ISR.propsChange.set('length', this.ISR.props.stream.length);
            this.ISR.propsChange.set('seq', 0);
        },
        after:() => {
            this.DFA.resultChange.filterTokens();
        },
        nextChar:()=> {
            let seq = this.ISR.props.seq;
            if (seq <= this.ISR.props.length - 1) {
                return this.ISR.props.stream[seq];
            }
            return false;
        },
        isLastChar:() => {
            return this.ISR.props.seq === this.ISR.props.length - 1;
        },
        read:() => {
            let ch:string | false = '';
            while ((ch = this.ISR.nextChar()) !== false) {
                let match = false;
                let end = false;

                let state = this.DFA.state;
                let nextState = flowModel.getNextState(ch, state, this.DFA.result.matchs);
                if (nextState !== DFA_STATE_CONST.S_RESET) {
                    match = true;
                    if (this.ISR.isLastChar()) {
                        end = true;
                    }
                }
                let path = {
                    'state': state,
                    'ch': ch,
                    'nextState': nextState,
                    'match': match,
                    'end': end,
                };
                flowModel.resultChange.pathGrow(path);

                if (match) {
                    this.ISR.propsChange.incrSeq();
                    this.DFA.events.flowtoNextState(ch, nextState);
                    if (end) {
                        this.DFA.resultChange.produceToken();
                    }
                } else {
                    this.DFA.resultChange.produceToken();
                    this.DFA.events.flowtoResetState();
                }
            }
        },
    }

    constructor(){

    }


    // Deterministic finite automaton
    DFA = {
        result: {
            matchs: <Array<string>>[], // Matched character queue
            tokens: <Array<Token>>[], // List of generated tokens
        },
        resultChange: {
            toDefault:() => {
                this.DFA.state = DFA_STATE_CONST.S_RESET;
                this.DFA.result.matchs = [];
                this.DFA.result.tokens = [];
            },
            pushToTokens:(token:Token) => {
                this.DFA.result.tokens.push(token);
                this.DFA.result.matchs = [];
            },
            pushToMatchs:(ch:string) => {
                this.DFA.result.matchs.push(ch);
            },
            filterTokens:() => {
                let tokens:Array<Token> = [];
                this.DFA.result.tokens.forEach((token => {
                    if (token.value !== ENUM_STATE.WHITESPACE) {
                        tokens.push(token);
                    }
                }));
                this.DFA.result.tokens = tokens;
            },
            produceToken:() => {
                if (this.DFA.result.matchs.length) {
                    let value = this.DFA.result.matchs.join('');
                    let type = Tools.judgeTokenType(this.DFA.state, value);
                    let token = {
                        "type": type,
                        "value": value,
                    };
                    this.DFA.resultChange.pushToTokens(token);
                }
            },
        },

        state: DFA_STATE_CONST.S_RESET, // Current machine status
        events: {
            flowtoNextState:(ch:string, state:ENUM_STATE) => {
                this.DFA.resultChange.pushToMatchs(ch);
                this.DFA.state = state;
            },

            flowtoResetState:() => {
                this.DFA.state = DFA_STATE_CONST.S_RESET;
            },
        },
    }

    // Reset lexer data
    resetDefault = () => {
        flowModel.resultChange.toDefault();
        this.ISR.propsChange.toDefault();
        this.DFA.resultChange.toDefault();
    }

    // Start working
    start = (stream:string) => {
        this.resetDefault();
        this.ISR.before(stream);
        this.ISR.read();
        this.ISR.after();
    }
};


export default Lexer