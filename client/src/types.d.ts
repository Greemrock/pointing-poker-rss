import { Priority } from './Shared/enums';

type payloadType = {
  name: string;
  surname: string;
  position: string;
  image: string | null | undefined;
  observer: boolean;
  admin: boolean;
};

type requestPlayerType = {
  id: number;
  name: string;
  surname: string;
  position: string;
  image: string | null;
  admin: boolean;
  obserever: boolean;
};

type payloadImage = {
  image: string | null | undefined;
};

type IssueType = {
  id: number;
  currentId: number;
  isDone: boolean;
  priority: Priority;
  title: string;
  linkCard: string;
};
