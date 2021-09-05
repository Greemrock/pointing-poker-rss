import axios from 'axios';

export const addUser = async (payload: payloadType): Promise<void> => {
  const result = await axios.post(
    'https://safe-lowlands-48809.herokuapp.com/users',
    payload
  );
};
