const randomColorFactor = () => {
  return Math.round(Math.random() * 255);
};

const randomColor = (opacity: number) => {
  return (
    'rgba(' +
    randomColorFactor() +
    ',' +
    randomColorFactor() +
    ',' +
    randomColorFactor() +
    ',' +
    (opacity || '.3') +
    ')'
  );
};

const randomColorsArray = (length: number) => {
  const arr: string[] = [];
  let n = 0;

  while (n < length) {
    arr.push(randomColor(1));
    n++;
  }
  return arr;
};

export const dataForGraph = (typeCard: string[], voteAmount: number[]) => ({
  type: 'pie',
  labels: typeCard,
  datasets: [
    {
      label: '# of Votes',
      data: voteAmount,
      backgroundColor: randomColorsArray(typeCard.length),
    },
  ],
});
