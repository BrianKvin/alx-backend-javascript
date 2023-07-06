export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const groc = new Map();
  for (const elem of arr) {
    groc.set(elem[0], elem[1]);
  }
  return groc;
}
