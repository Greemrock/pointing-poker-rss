import axios from 'axios';

export type payloadType = {
  name: string;
  surname: string;
  position: string;
  image: string | null | undefined;
  observer: boolean;
  admin: boolean;
};

export const addUser = async (payload: payloadType): Promise<void> => {
  const result = await axios.post(
    'https://safe-lowlands-48809.herokuapp.com/users',
    payload
  );
};
