export type payloadCardChoice = {
  issueId: string;
  roomId: string;
  cardNumber: number;
};
export type payloadStartEndRound = {
  currentId: string;
  roomId: string;
};

export type payloadUserVoteResult = {
  issueId: string;
  userId: string;
  voteResult: string;
  roomId: string;
  cardType: string;
};
