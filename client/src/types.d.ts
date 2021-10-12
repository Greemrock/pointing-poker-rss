type payloadType = {
  name: string;
  surname: string;
  job: string;
  image: string | null | undefined;
  observer: boolean;
  roomId: string | null;
};

type settingsPayloadType = {
  id: string;
  timer: string;
  cardValue: string;
  scoreType: string;
  isTimerNeeded: boolean;
  roomId: string;
};

type requestPlayerType = {
  id: string;
  name: string;
  surname: string;
  job: string;
  image: string | null;
  isAdmin: boolean;
  obserever: boolean;
};

type payloadImage = {
  image: string | null | undefined;
};

type IssueFormType = {
  title: string;
  link: string;
  priority: Priority;
};
