type payloadType = {
  name: string;
  surname: string;
  job: string;
  image: string | null | undefined;
  observer: boolean;
  roomId: string | null;
};

type payloadImage = {
  image: string | null | undefined;
};

type IssueFormType = {
  title: string;
  link: string;
  priority: Priority;
};
