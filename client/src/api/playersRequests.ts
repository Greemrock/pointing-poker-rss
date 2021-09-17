import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://safe-lowlands-48809.herokuapp.com/',
});

export const getAllPlayers = async (): Promise<requestPlayerType> => {
  const result = await axiosInstance.get('users');
  return result.data;
};

export const addPlayer = async (payload: payloadType): Promise<void> => {
  await axiosInstance.post('users', payload);
};
