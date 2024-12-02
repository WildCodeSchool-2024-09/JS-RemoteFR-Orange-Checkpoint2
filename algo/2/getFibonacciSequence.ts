/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  // Your code here !
  if (size <= 0) {
    return [];
  }

  const sequence: number[] = [0];
  if (size === 1) {
    return sequence;
  }

  let n1: number = 0;
  let n2: number = 1;
  sequence.push(n2);

  for (let i = 2; i < size; i++) {
    const somme: number = n1 + n2;
    sequence.push(somme);
    n1 = n2;
    n2 = somme;
  }
  return sequence;
}

getFibonacciSequence(0);
getFibonacciSequence(1);
getFibonacciSequence(2);
getFibonacciSequence(5);
getFibonacciSequence(10);

export default getFibonacciSequence;
