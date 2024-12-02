/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
  // Your code here !
  if (letter.length !== 1) {
    throw new Error("Le paramètre 'letter' doit être un seul caractère.");
  }

  return givenString.split("").filter((char) => char === letter).length;
}

export default countLetters;
