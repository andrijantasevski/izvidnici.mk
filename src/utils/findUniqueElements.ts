export default function findUniqueElements<T>(arr: T[]) {
  let uniqueItems: T[] = [];

  arr.forEach((item) => {
    if (uniqueItems.indexOf(item) === -1) {
      uniqueItems.push(item);
    }
  });

  return uniqueItems;
}
