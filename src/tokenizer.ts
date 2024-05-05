export function tokenizeCode(code: string): string[] {
  // split the code into individual characters
  const characters = code.split("");

  //array to store tokens
  const tokens: string[] = [];

  //store the current token being built
  let currentToken = "";

  for (const char of characters) {
    // if the character is white space or punctuation mark
    if (/\s|\+|\-|\*|\/|\(|\)|\{|\}|;|,|\.|\[|\]/.test(char)) {
      // if there is a current token being built, push it to the tokens array
      if (currentToken) {
        tokens.push(currentToken);
        currentToken = "";
      }
      // if the character is not a whitespace, push it into the tokens array
      if (/\S/.test(char)) {
        tokens.push(char);
      }
    } else {
      // if the character  is part of a word or number, append it to the current token
      currentToken += char;
    }
  }
  // push the last token if exists
  if (currentToken) {
    tokens.push(currentToken);
  }

  return tokens;
}
