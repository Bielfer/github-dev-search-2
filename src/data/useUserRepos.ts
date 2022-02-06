import useSWR from 'swr';
import { apiUrl } from '@/utils/constants';

const useUserRepos = (username?: string) => {
  const { data, error } = useSWR<Array<Repo>>(
    username ? `${apiUrl}/users/${username}/repos?per_page=20` : null
  );

  return { repos: data, error };
};

export default useUserRepos;
