export const removeZeros = (array: string[], array2: number[]): string[] => {
  return array.filter((el, i) => array2[i] !== 0 && el);
};
