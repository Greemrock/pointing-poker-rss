import { Priority } from '../../Shared';

export type payloadIssue = {
  title: string;
  link: string;
  priority: Priority;
  isDone: boolean;
  roomId: string;
};
