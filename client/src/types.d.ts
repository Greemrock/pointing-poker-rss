type payloadType = {
  name: string;
  surname: string;
  job: string;
  image: string | null | undefined;
  observer: boolean;
  roomId: string | null;
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

type PlayerCard = {
  id: string;
  name: string;
  surname: string;
  job: string;
  isAdmin: boolean;
  image: string | null;
};

type IssueFormType = {
  title: string;
  link: string;
  priority: Priority;
};
