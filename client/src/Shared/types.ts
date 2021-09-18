import { Priority } from './enums';

export type IssueType = {
  id: string;
  currentId: string;
  isDone: boolean;
  priority: Priority;
  title: string;
  link: string;
};
