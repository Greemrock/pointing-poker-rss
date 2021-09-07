export const getTrimString = (
  str: string | undefined,
  trim: number
): string | undefined => {
  if (str) {
    const newString = str.split('').slice(0, trim).concat('...').join('');
    return str.length < trim ? str : newString;
  } else return undefined;
};
