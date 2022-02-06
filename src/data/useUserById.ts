import useSWR from 'swr';
import { apiUrl } from '@/utils/constants';

const useUserById = (username?: string) => {
  const { data, error } = useSWR<DetailedUser>(
    username ? `${apiUrl}/users/${username}` : null
  );

  return { user: data, error };
};

export default useUserById;
