export const removeZeros = (
  labelArray: string[],
  numberArray: number[]
): [string[], number[]] => {
  const textArray = labelArray.filter((el, i) => numberArray[i] !== 0 && el);
  const valueArray = numberArray.filter((el) => el !== 0);
  return [textArray, valueArray];
};
