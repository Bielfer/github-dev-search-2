import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { IoStar } from 'react-icons/io5';
import Link from 'next/link';
import useUserRepos from '@/data/useUserRepos';
import { SortRepos, sortRepos } from '@/services/sort';

const Repositories: FC = () => {
  const router = useRouter();
  const [select, setSelect] = useState<SortRepos>('stars-desc');

  const { username } = router.query;

  if (Array.isArray(username)) throw new Error('Invalid url');

  const { repos } = useUserRepos(username);

  repos?.sort(sortRepos[select]);

  return (
    <div className="p-6 sm:p-16 w-full bg-gray-50 md:overflow-y-scroll max-h-screen">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Repositórios</h1>
        <select
          className="border border-black rounded-lg bg-white"
          value={select}
          onChange={(e) => {
            setSelect(e.target.value as SortRepos);
          }}
        >
          <option disabled>Ordenar Por</option>
          <option value="stars-asc">Estrelas (Asc.)</option>
          <option value="stars-desc">Estrelas (Desc.)</option>
        </select>
      </div>
      <div className="flex flex-col pt-4 gap-y-2">
        {repos?.map((repo) => (
          <Link key={repo.id} href={repo.html_url}>
            <div
              className="border border-black p-5 bg-white rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer"
              data-testid="repo-card"
            >
              <button
                className="text-lg text-left font-semibold hover:underline"
                type="button"
              >
                {repo.name}
              </button>
              <p className="text-gray-700 font-medium">{repo.description}</p>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center gap-x-1">
                  <IoStar /> {repo.stargazers_count}
                </div>
                <div className="h-1 w-1 rounded-full bg-black" />
                <div>{repo.language}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
