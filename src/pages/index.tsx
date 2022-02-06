import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import Link from 'next/link';
import useUsers from '@/data/useUsers';

const Home: NextPage = () => {
  const { users, query, setQuery } = useUsers();
  const hasUsers = users ? users?.length > 0 : false;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery((prev) => ({ ...prev, q: e.target.value }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <h1 className="text-center text-2xl font-bold italic pb-3">
          Github Dev Search 2.0
        </h1>
        <div className="flex">
          <div className="relative">
            <input
              className={`px-2 py-1 border border-gray-900 outline-none ${
                hasUsers ? 'rounded-tl' : 'rounded-l'
              }`}
              value={query.q}
              onChange={handleChange}
              data-testid="input"
            />
            {hasUsers ? (
              <div className="absolute w-full py-2 border rounded-b border-t-0 border-gray-900">
                {users?.map((user) => (
                  <Link key={user.id} href={user.login}>
                    <button
                      className="w-full flex p-1 items-center gap-x-3 hover:bg-gray-200 transition duration-300"
                      type="button"
                      data-testid="list-button"
                    >
                      <img
                        className="w-12 h-12 rounded-lg"
                        src={user.avatar_url}
                        alt=""
                      />
                      {user.login}
                    </button>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Link href={`/${query.q}`}>
            <button
              className="transition bg-gray-900 hover:bg-gray-800 text-white px-2 rounded-r"
              type="button"
              data-testid="button"
            >
              Procurar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
