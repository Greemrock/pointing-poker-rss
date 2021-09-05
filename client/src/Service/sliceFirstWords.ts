export const sliceFirstWords = (name: string, surname: string): string => {
  return `${name.slice(0, 1)}${surname.slice(0, 1)}`;
};
