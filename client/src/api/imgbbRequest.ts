import axios from 'axios';
export const postImage = async (
  image: string | null | undefined
): Promise<string | void> => {
  if (image) {
    const imageContent = image.split(',')[1];
    const body = new FormData();
    body.set('key', process.env.REACT_APP_IMGBB || '');
    body.append('image', imageContent);
    const result = await axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
    });
    return result.data.data.display_url;
  }
};
