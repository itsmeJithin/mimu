# MIMU - A TypeScript Minification Library

The TypeScript Minification Library is a lightweight tool for minifying JavaScript or TypeScript code by removing unnecessary whitespace and comments. It provides functions for tokenizing and minifying code, making it ideal for optimizing code size and improving load times in web applications.

## Installation

You can install the TypeScript Minification Library via npm:

```bash
npm install mimu
```
## Usage
### Tokenize Code
The tokenizeCode function breaks down the input code into individual tokens. Here's how you can use it:

```javascript
import { tokenizeCode } from 'mimu';

const code = 'function add(a, b) { return a + b; }';
const tokens = tokenizeCode(code);
console.log('Tokens:', tokens);
```

### Minify Code
The minifyCode function removes unnecessary whitespace and comments from the input code. Here's how you can use it:
```javascript
import { minifyCode } from 'mimu';

const code = `
    // This is a sample function
    function add(a, b) {
        /*
            This is a multi-line comment
            It will be removed during minification
        */
        return a + b; // Add two numbers
    }
`;

const minifiedCode = minifyCode(code);
console.log('Minified Code:', minifiedCode);
```
## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request on GitHub.



