import axios from 'axios';
const API_KEY = '1df4cb38923edba9f813994063d84816';
export const postImage = async (
  image: string | null | undefined
): Promise<string | void> => {
  if (image) {
    const imageContent = image.split(',')[1];
    const body = new FormData();
    body.set('key', API_KEY);
    body.append('image', imageContent);
    const result = await axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
    });
    return result.data.data.display_url;
  }
};
