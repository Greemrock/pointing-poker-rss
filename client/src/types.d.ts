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
