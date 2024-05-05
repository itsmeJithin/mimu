import { javascriptKeyWords } from "./keywords";

export function minifyCode(code: string): string {
  const codeWithoutSingleLineComments = code.replace(/\/\/.*/g, "");
  const codeWithoutMultiLineComments = codeWithoutSingleLineComments.replace(
    /\/\*[\s\S]*?\*\//g,
    ""
  );

  // Add space after each keyword
  // for (const keyword of javascriptKeyWords) {
  //   const keywordRegExp = new RegExp(`\\b${keyword}\\b`, "g");
  //   minifiedCode = minifiedCode.replace(keywordRegExp, `${keyword} `);
  // }
  const minifiedCode = codeWithoutMultiLineComments.replace(
    /([^\w\s])(\s+)|(^|\n)(\s+)/g,
    "$1$3"
  );

  return minifiedCode;
}
