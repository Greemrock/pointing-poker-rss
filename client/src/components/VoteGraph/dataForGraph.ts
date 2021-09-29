const percent = (voteAmount: number[]) => {
  const total = voteAmount.reduce((a, b) => a + b);
  return voteAmount.map((elem) => Math.floor((elem / total) * 100 + 0.5));
};

export const dataForGraph = (typeCard: string[], voteAmount: number[]) => ({
  type: 'pie',
  labels: typeCard,
  datasets: [
    {
      label: '# of Votes',
      data: percent(voteAmount),
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgb(244, 67, 54)',
        'rgba(255, 206, 86)',
        'rgb(50, 156, 53, 0.5)',
        'rgba(75, 192, 192)',
        'rgb(42, 29, 255, 0.8)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(255, 99, 132, 0.5)',
        'rgb(50, 156, 53)',
        'rgb(216, 119, 204)',
        'rgba(75, 192, 192, 0.4)',
      ],
    },
  ],
});
