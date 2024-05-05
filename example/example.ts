import { tokenizeCode } from "../dist/tokenizer";
import { minifyCode } from "../dist/minifier";

const code = `
    // this is a sample function
    function add(a,b){
        /*
         * This is a multiline comment
         * it will be removed
         */
        return a+b; // add two numbers 
    }
`;

const tokens = tokenizeCode(code);
console.log("Tokens:", tokens);

const minified = minifyCode(code);
console.log("Minified:", minified);
