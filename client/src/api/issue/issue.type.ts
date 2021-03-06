import { IssueType } from '../../reducers/issue/issue.type';
import { Priority } from '../../Shared';

export type payloadBaseIssue = {
  title: string;
  link: string;
  priority: Priority;
  isDone: boolean;
  roomId: string;
};

export type payloadDeleteIssue = {
  id: string;
  roomId: string;
};

export type payloadIssueId = {
  currentIssueId: string;
  roomId: string;
};

export type payloadIssue = IssueType;
