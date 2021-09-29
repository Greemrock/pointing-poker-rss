export const getMinutesAndSecondsFromTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time - 60 * minutes;
  return `${minutes} :${seconds >= 10 ? seconds : `0${seconds}`}`;
};
