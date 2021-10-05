export const removeZeros = (
  array: string[],
  array2: number[]
): [string[], number[]] => {
  const textArray = array.filter((el, i) => array2[i] !== 0 && el);
  const valueArray = array2.filter((el) => el !== 0);
  return [textArray, valueArray];
};
