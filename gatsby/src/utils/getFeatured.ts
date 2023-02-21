export function getFeatured(array: []) {
  const filteredArray = array.filter((item: any) => item.featured);

  return filteredArray;
}
