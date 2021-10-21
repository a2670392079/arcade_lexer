export enum ENUM_STATE {
  // Simple Operator
  PLUS = "+",
  SUBTRACT = "-",
  TIMES = "*",
  DIVIDE = "/",
  MODE = "%",

  // Logical Operator
  NOT = "!",

  // Compare Operator
  GREAT = ">",
  LESS = "<",
  ASSIGN = "=",

  GREAT_EQUAL = ">=",
  LESS_EQUAL = "<=",
  EQUAL = "==",
  NOT_EQUAL = "!=",

  // Bit Operator
  BIT_AND = "&",
  BIT_OR = "|",
  BIT_NOT = "~",
  BIT_XOR = "^",

  CONDITION_AND = "&&",
  CONDITION_OR = "||",
  BIT_LEFT_SHIFT = "<<",
  BIT_RIGHT_SHIFT = ">>",

  // Whitespace mark
  WHITESPACE = " ",
  LINEFEED = "\n",
  CARRIGE_REUTRN = '\r',

  // Bracket mark
  LEFT_BRACKET = "(",
  RIGHT_BRACKET = ")",
  LEFT_BRACE = "{",
  RIGHT_BRACE = "}",
  LEFT_SQUARE_BRACKET = "[",
  RIGHT_SQUARE_BRACKET = "]",

  // Other mark
  DOT = ".",
  COMMA = ",",
  SEMICOLON = ";",
  QUOTATION = "'",
  DOUBLE_QUOTATION = '"',
  SHARP = "#",
  QUESTION = "?",
  COLON = "=",

  // TOKEN
  T_OPERATOR = 1,
  T_DOUBLE_OPERATOR = 2,
  T_SYMBOL = 3,
  T_WHITESPACE = 4,
  T_LINEFEED = 5,
  KEYWORD = 6,
  T_IDENTIFIER = 7,
  T_NUMBER = 8,
  T_FLOAT = 9,
  T_STRING = 10,
  T_CHAR = 11,
  T_UNKNOWN = 12,
  T_FUNTICON = 13,
  T_PROFILE = 14,
  T_GLOBAL = 15,

  // DFA State
  S_RESET = 0,
  S_OPERATOR = 1,
  S_SYMBOL = 2,
  S_DOUBLE_CHAR_FIRST_BIT_AND = 3,
  S_DOUBLE_CHAR_SECOND_BIT_AND = 4,
  S_DOUBLE_CHAR_FIRST_BIT_OR = 5,
  S_DOUBLE_CHAR_SECOND_BIT_OR = 6,
  S_DOUBLE_CHAR_FIRST_GREAT = 7,
  S_DOUBLE_CHAR_SECOND_GREAT = 8,
  S_DOUBLE_CHAR_FIRST_LESS = 9,
  S_DOUBLE_CHAR_SECOND_LESS = 10,
  S_DOUBLE_CHAR_FIRST_NOT = 11,
  S_DOUBLE_CHAR_FIRST_ASSIGN = 12,
  S_DOUBLE_CHAR_SECOND_ASSIGN = 13,
  S_WHITESPACE = 14,
  S_LINEFEED = 15,
  S_IDENTIFIER = 16,
  S_NUMBER = 17,
  S_FLOAT = 18,
  S_STRING = 19,
  S_STRING_END = 20,
  S_CHAR = 21,
  S_CHAR_END = 22,
  S_END = 100,
}

const FUNTCIONS = [

]

// Constant type: Charset
export const CHARSET_CONST = {
  // Char list
  CHAR: {
      // Operator list
      OPERATOR: [
          ENUM_STATE.PLUS, ENUM_STATE.SUBTRACT, ENUM_STATE.TIMES, ENUM_STATE.DIVIDE, ENUM_STATE.MODE,
          ENUM_STATE.NOT,
          ENUM_STATE.GREAT, ENUM_STATE.LESS, ENUM_STATE.ASSIGN,
          ENUM_STATE.BIT_AND, ENUM_STATE.BIT_OR, ENUM_STATE.BIT_NOT, ENUM_STATE.BIT_XOR,
      ],
      // Symbol list
      SYMBOL: [
          ENUM_STATE.LEFT_BRACKET, ENUM_STATE.RIGHT_BRACKET, ENUM_STATE.LEFT_BRACE, ENUM_STATE.RIGHT_BRACE, ENUM_STATE.LEFT_SQUARE_BRACKET, ENUM_STATE.RIGHT_SQUARE_BRACKET,
          ENUM_STATE.DOT, ENUM_STATE.COMMA, ENUM_STATE.SEMICOLON, ENUM_STATE.QUOTATION, ENUM_STATE.DOUBLE_QUOTATION, ENUM_STATE.SHARP, ENUM_STATE.QUESTION, ENUM_STATE.COLON,
      ],
      // Whitespace list
      WHITESPACE: [
          ENUM_STATE.WHITESPACE,
      ],
      // Line feed list
      LINEFEED: [
          ENUM_STATE.LINEFEED,
          ENUM_STATE.CARRIGE_REUTRN
      ],
  },

  // Double char list
  DOUBLE_CHAR: [
      ENUM_STATE.GREAT_EQUAL, ENUM_STATE.LESS_EQUAL, ENUM_STATE.EQUAL, ENUM_STATE.NOT_EQUAL,
      ENUM_STATE.CONDITION_AND, ENUM_STATE.CONDITION_OR, ENUM_STATE.BIT_LEFT_SHIFT, ENUM_STATE.BIT_RIGHT_SHIFT,
  ],

  // Composition of double char: &&
  DOUBLE_CHAR_FIRST_BIT_AND: [ENUM_STATE.BIT_AND],
  DOUBLE_CHAR_SECOND_BIT_AND: [ENUM_STATE.BIT_AND],

  // Composition of double char: ||
  DOUBLE_CHAR_FIRST_BIT_OR: [ENUM_STATE.BIT_OR],
  DOUBLE_CHAR_SECOND_BIT_OR: [ENUM_STATE.BIT_OR],

  // Composition of double char: >>
  DOUBLE_CHAR_FIRST_GREAT: [ENUM_STATE.GREAT],
  DOUBLE_CHAR_SECOND_GREAT: [ENUM_STATE.GREAT],

  // Composition of double char: <<
  DOUBLE_CHAR_FIRST_LESS: [ENUM_STATE.LESS],
  DOUBLE_CHAR_SECOND_LESS: [ENUM_STATE.LESS],

  // Composition of double char: >= , <= , != , ==
  DOUBLE_CHAR_FIRST_NOT: [ENUM_STATE.NOT],
  DOUBLE_CHAR_FIRST_ASSIGN: [ENUM_STATE.ASSIGN],
  DOUBLE_CHAR_SECOND_ASSIGN: [ENUM_STATE.ASSIGN],

  // Keyword
  KEYWORD: [
      // 'char', 'int', 'short', 'long', 'float', 'double', 'sizeof', 'signed', 'unsigned','goto','const', 'static', 'auto', 'extern', 'register','struct', 'union', 'enum', 'typedef','include',
      'var', 'if', 'else', 'while', 'for', 'do', 'break', 'continue', 
      'void', 'return', 'switch', 'case', 'default',
  ],
};

// Constant type: DFA State
export const DFA_STATE_CONST = {
  // State of reset
  S_RESET: ENUM_STATE.S_RESET,

  // State of operator
  // State of symbol
  S_OPERATOR: ENUM_STATE.S_OPERATOR,
  S_SYMBOL: ENUM_STATE.S_SYMBOL,

  // State of double char: &&
  S_DOUBLE_CHAR_FIRST_BIT_AND: ENUM_STATE.S_DOUBLE_CHAR_FIRST_BIT_AND,
  S_DOUBLE_CHAR_SECOND_BIT_AND: ENUM_STATE.S_DOUBLE_CHAR_SECOND_BIT_AND,

  // State of double char: ||
  S_DOUBLE_CHAR_FIRST_BIT_OR: ENUM_STATE.S_DOUBLE_CHAR_FIRST_BIT_OR,
  S_DOUBLE_CHAR_SECOND_BIT_OR: ENUM_STATE.S_DOUBLE_CHAR_SECOND_BIT_OR,

  // State of double char: >>
  S_DOUBLE_CHAR_FIRST_GREAT: ENUM_STATE.S_DOUBLE_CHAR_FIRST_GREAT,
  S_DOUBLE_CHAR_SECOND_GREAT: ENUM_STATE.S_DOUBLE_CHAR_SECOND_GREAT,

  // State of double char: <<
  S_DOUBLE_CHAR_FIRST_LESS: ENUM_STATE.S_DOUBLE_CHAR_FIRST_LESS,
  S_DOUBLE_CHAR_SECOND_LESS: ENUM_STATE.S_DOUBLE_CHAR_SECOND_LESS,

  // State of double char: >=, <=, !=, ==
  S_DOUBLE_CHAR_FIRST_NOT: ENUM_STATE.S_DOUBLE_CHAR_FIRST_NOT,
  S_DOUBLE_CHAR_FIRST_ASSIGN: ENUM_STATE.S_DOUBLE_CHAR_FIRST_ASSIGN,
  S_DOUBLE_CHAR_SECOND_ASSIGN: ENUM_STATE.S_DOUBLE_CHAR_SECOND_ASSIGN,

  // State of whitespace
  S_WHITESPACE: ENUM_STATE.S_WHITESPACE,

  // State of line feed
  S_LINEFEED: ENUM_STATE.S_LINEFEED,

  // State of identifier
  S_IDENTIFIER: ENUM_STATE.S_IDENTIFIER,

  // State of number literal
  S_NUMBER: ENUM_STATE.S_NUMBER,

  // State of float literal
  S_FLOAT: ENUM_STATE.S_FLOAT,

  // State of string literal
  S_STRING: ENUM_STATE.S_STRING,
  S_STRING_END: ENUM_STATE.S_STRING_END,

  // State of char literal
  S_CHAR: ENUM_STATE.S_CHAR,
  S_CHAR_END: ENUM_STATE.S_CHAR_END,

  // State of end
  S_END: ENUM_STATE.S_END,
};


export class Tools {
    public static isUndefined(obj:any) {
        return typeof obj === "undefined";
    }
    public static isNodeEnvironment() {
        return typeof window === "undefined";
    }
    public static isInArray(needle:any, haystack:Array<any>) {
        return haystack.indexOf(needle) > -1;
    }
    public static judgeTokenTypeByValue(value:any) {
        if (Tools.isInArray(value, CHARSET_CONST.CHAR.OPERATOR)) {
            return 'Operator';
        }
        if (Tools.isInArray(value, CHARSET_CONST.DOUBLE_CHAR)) {
            return 'DoubleOperator';
        }
        if (Tools.isInArray(value, CHARSET_CONST.CHAR.SYMBOL)) {
            return 'Symbol';
        }
        if (Tools.isInArray(value, CHARSET_CONST.KEYWORD)) {
            return 'Keyword';
        }
        return '';
    }
    public static judgeTokenType(state:ENUM_STATE, value:string) {
        // Derive Token type according to Value
        let tokenType = Tools.judgeTokenTypeByValue(value);
        if (tokenType) {
            return tokenType;
        }

        // Derive Token type according to State
        if (state === DFA_STATE_CONST.S_WHITESPACE) {
            return 'Whitespace';
        }
        if (state === DFA_STATE_CONST.S_LINEFEED) {
            return 'LineFeed';
        }
        if (state === DFA_STATE_CONST.S_IDENTIFIER) {
            return 'Identifier';
        }
        if (state === DFA_STATE_CONST.S_NUMBER) {
            return 'Number';
        }
        if (state === DFA_STATE_CONST.S_FLOAT) {
            return 'Float';
        }
        if (state === DFA_STATE_CONST.S_STRING_END) {
            return 'String';
        }
        if (state === DFA_STATE_CONST.S_CHAR_END) {
            return 'Char';
        }
        return 'Unknown';
    }
    public static getFirstCharState(ch:string) {
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_FIRST_BIT_AND)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_BIT_AND;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_FIRST_BIT_OR)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_BIT_OR;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_FIRST_GREAT)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_GREAT;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_FIRST_LESS)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_LESS;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_FIRST_NOT)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_NOT;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_FIRST_ASSIGN)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_ASSIGN;
        }
        return DFA_STATE_CONST.S_RESET;
    }
    public static getSecondCharState(ch:string) {
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_SECOND_BIT_AND)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_BIT_AND;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_SECOND_BIT_OR)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_BIT_OR;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_SECOND_GREAT)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_GREAT;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_SECOND_LESS)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_LESS;
        }
        if (Tools.isInArray(ch, CHARSET_CONST.DOUBLE_CHAR_SECOND_ASSIGN)) {
            return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_ASSIGN;
        }
        return DFA_STATE_CONST.S_RESET;
    }

    public static isOperatorChar(ch:string) {
        return Tools.isInArray(ch, CHARSET_CONST.CHAR.OPERATOR);
    }
    public static isSymbolChar(ch:string) {
        return Tools.isInArray(ch, CHARSET_CONST.CHAR.SYMBOL);
    }
    public static isWhitespaceChar(ch:string) {
        return Tools.isInArray(ch, CHARSET_CONST.CHAR.WHITESPACE);
    }
    public static isLineFeedChar(ch:string) {
        return Tools.isInArray(ch, CHARSET_CONST.CHAR.LINEFEED);
    }
    public static isFirstCharOfDoubleChar(ch:string) {
        return Tools.getFirstCharState(ch) > 0;
    }
    public static isSecondCharOfDoubleChar(ch:string) {
        return Tools.getSecondCharState(ch) > 0;
    }
    public static isAlphabetChar(ch:string) {
        return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
    }
    public static isNumberChar(ch:string) {
        return !isNaN(parseInt(ch)) && Number(ch) >= 0 && Number(ch) <= 9;
    }
    public static  isInStates(state:ENUM_STATE, states:Array<ENUM_STATE>) {
        return Tools.isInArray(state, states);
    }
};



// Define the DFA state flow model
export const flowModel = {
  result: {
      paths: <Array<any>>[],
  },
  resultChange: {
      pathGrow(path:any) {
          flowModel.result.paths.push(path)
      },
      toDefault() {
          flowModel.result.paths = [];
      }
  },

  getNextState(ch:string, state:ENUM_STATE, matchs:Array<string>) {

      // Handling of common parts
      if (Tools.isInStates(state, [DFA_STATE_CONST.S_STRING])) {
          if (ch !== ENUM_STATE.DOUBLE_QUOTATION) {
              return DFA_STATE_CONST.S_STRING;
          } else {
              return DFA_STATE_CONST.S_STRING_END;
          }
      }
      if (Tools.isInStates(state, [DFA_STATE_CONST.S_CHAR])) {
          if (matchs.length === 1) {
              return DFA_STATE_CONST.S_CHAR;
          }
          if (matchs.length === 2 && ch === ENUM_STATE.QUOTATION) {
              return DFA_STATE_CONST.S_CHAR_END;
          }
          return DFA_STATE_CONST.S_RESET;
      }

      // Handling of non-common parts
      if (Tools.isAlphabetChar(ch)) {
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_RESET, DFA_STATE_CONST.S_IDENTIFIER])) {
              return DFA_STATE_CONST.S_IDENTIFIER;
          }
      } else if (Tools.isNumberChar(ch)) {
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_RESET, DFA_STATE_CONST.S_NUMBER])) {
              return DFA_STATE_CONST.S_NUMBER;
          }
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_FLOAT])) {
              return DFA_STATE_CONST.S_FLOAT;
          }
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_IDENTIFIER])) {
              return DFA_STATE_CONST.S_IDENTIFIER;
          }
      } else if (Tools.isOperatorChar(ch)) {
          if (Tools.isFirstCharOfDoubleChar(ch)) {
              if (Tools.isInStates(state, [DFA_STATE_CONST.S_RESET])) {
                  return Tools.getFirstCharState(ch);
              }
          }
          if (Tools.isSecondCharOfDoubleChar(ch)) {
              if (state === DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_BIT_AND && ch === ENUM_STATE.BIT_AND) {
                  return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_BIT_AND;
              }
              if (state === DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_BIT_OR && ch === ENUM_STATE.BIT_OR) {
                  return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_BIT_OR;
              }
              if (state === DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_GREAT && ch === ENUM_STATE.GREAT) {
                  return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_GREAT;
              }
              if (state === DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_LESS && ch === ENUM_STATE.LESS) {
                  return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_LESS;
              }

              if (state === DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_GREAT && ch === ENUM_STATE.ASSIGN) {
                  return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_ASSIGN;
              }
              if (state === DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_LESS && ch === ENUM_STATE.ASSIGN) {
                  return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_ASSIGN;
              }
              if (state === DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_NOT && ch === ENUM_STATE.ASSIGN) {
                  return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_ASSIGN;
              }
              if (state === DFA_STATE_CONST.S_DOUBLE_CHAR_FIRST_ASSIGN && ch === ENUM_STATE.ASSIGN) {
                  return DFA_STATE_CONST.S_DOUBLE_CHAR_SECOND_ASSIGN;
              }
          }

          if (Tools.isInStates(state, [DFA_STATE_CONST.S_RESET])) {
              return DFA_STATE_CONST.S_OPERATOR;
          }
      } else if (Tools.isSymbolChar(ch)) {
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_RESET])) {
              if (ch === ENUM_STATE.QUOTATION) {
                  return DFA_STATE_CONST.S_CHAR;
              }
              if (ch === ENUM_STATE.DOUBLE_QUOTATION) {
                  return DFA_STATE_CONST.S_STRING;
              }
              return DFA_STATE_CONST.S_SYMBOL;
          }
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_NUMBER]) && ch === ENUM_STATE.DOT) {
              return DFA_STATE_CONST.S_FLOAT;
          }
      } else if (Tools.isWhitespaceChar(ch)) {
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_RESET])) {
              return DFA_STATE_CONST.S_WHITESPACE;
          }
      } else if (Tools.isLineFeedChar(ch)) {
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_RESET])) {
              return DFA_STATE_CONST.S_LINEFEED;
          }
      } else {
          if (Tools.isInStates(state, [DFA_STATE_CONST.S_RESET, DFA_STATE_CONST.S_IDENTIFIER])) {
              return DFA_STATE_CONST.S_IDENTIFIER;
          }
      }
      return DFA_STATE_CONST.S_RESET;
  },
};

export interface Token {
  type: string,
  value: string
}