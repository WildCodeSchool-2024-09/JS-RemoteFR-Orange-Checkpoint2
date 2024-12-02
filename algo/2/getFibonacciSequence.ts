/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  const suite: number[] = [];
  if (size <= 0) {
    return suite;
  }

  for (let i = 0; i < size; i++) {
    if (i === 0 || i === 1) {
      suite.push(i);
    } else {
      suite.push(suite[i - 1] + suite[i - 2]);
    }
  }

  return suite;
}

export default getFibonacciSequence;
