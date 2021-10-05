export const getOverallVoite = (voteArr: number[]): number => {
  const votes = voteArr.reduce((a, b) => a + b);
  const allPointsArr: number[] = [];

  voteArr.forEach((number, index) => {
    allPointsArr.push(number * index);
  });

  const allPoints = allPointsArr.reduce((a, b) => a + b);

  return Math.floor(allPoints / votes);
};
