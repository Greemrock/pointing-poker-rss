import axios from 'axios';

export const getAllPlayers = async (): Promise<void> => {
  const result = await axios.get(
    'https://safe-lowlands-48809.herokuapp.com/users'
  );
  // return result.data;
};

export const addPlayer = async (payload: payloadType): Promise<void> => {
  const result = await axios.post(
    'https://safe-lowlands-48809.herokuapp.com/users',
    payload
  );
};
