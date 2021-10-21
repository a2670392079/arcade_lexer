import fs from "fs/promises";
import Lexer from "./arcade_lexer";
import path from "path";

const lexer = new Lexer();

const args = process.argv.slice(2);

// 测试文件名
const fileName = args[0];
// 输出文件名
const generatedFileName = args[1];


function getLexerResult(file: string, getFile: string) {
  fs.readFile(path.join(__dirname, file))
    .then((value) => {
      const stream = value.toString();
      lexer.start(stream);
      const res = lexer.DFA.result.tokens;
      
      fs.writeFile(path.join(__dirname, getFile), res.map(token => `<type: ${token.type}, ${token.value} >`).join('\n')).then((res) => {
        lexer.resetDefault();
      });
    })
    .catch((e) => console.log(e));
}

if(fileName && generatedFileName){
    getLexerResult(fileName,generatedFileName)
}