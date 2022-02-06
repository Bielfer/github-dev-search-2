import useSWR from 'swr';
import queryString from 'query-string';
import { useState } from 'react';
import { apiUrl } from '@/utils/constants';

const useUsers = () => {
  const [query, setQuery] = useState({ q: '', per_page: 5 });
  const url = queryString.stringifyUrl({
    url: `${apiUrl}/search/users`,
    query,
  });

  const moreThanThreeCharacters = query.q.length > 3;
  const { data, error } = useSWR<SearchUser>(
    moreThanThreeCharacters ? url : null
  );

  return { users: data?.items, error, query, setQuery };
};

export default useUsers;
