import axios from 'axios';

const useFetcher = () => {
  const get = (url: string) => axios.get(url).then((res) => res.data);

  return { get };
};

export default useFetcher;
