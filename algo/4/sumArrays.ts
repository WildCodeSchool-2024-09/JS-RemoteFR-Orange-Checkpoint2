/*
Écris une fonction avec deux paramètres. Ces paramètres sont des tableaux contenant des nombres **stockés sous forme de chaînes de caractères**.
Ta fonction doit renvoyer **un** tableau, où chaque élément est la somme des éléments des deux arguments correspondants (c'est-à-dire : le premier élément du tableau résultat est égal au premier élément du premier paramètre plus le premier élément du deuxième paramètre) .
Remarque : Si un élément est vide, il doit compter pour 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
sumArr( ["2", "5", "3"], ["2", "4", "9", "5", "5"] ) should return ["4", "9", "12", "5", "5"]
*/

function sumArr(arr1: string[], arr2: string[]): string[] {
 
  const length = Math.max(arr1.length, arr2.length);

  let result = [];
  
 
  for (let i = 0; i < length; i++) {
  

    let num1 = arr1[i] ? parseInt(arr1[i]) : 0;
    let num2 = arr2[i] ? parseInt(arr2[i]) : 0;

   
    result.push((num1 + num2).toString());
  }

  return result;
}

export default sumArr;
