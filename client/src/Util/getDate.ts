export const getDate = (): string => {
  const date = new Date();
  return (
    (date.getHours() < 10 ? '0' : '') +
    date.getHours() +
    ':' +
    (date.getMinutes() < 10 ? '0' : '') +
    date.getMinutes()
  );
};
