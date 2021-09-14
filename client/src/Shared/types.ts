import { Priority } from './enums';

export type IssueType = {
  id: number;
  currentId: number;
  isDone: boolean;
  priority: Priority;
  title: string;
  linkCard: string;
};
