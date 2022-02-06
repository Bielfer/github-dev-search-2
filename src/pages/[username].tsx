import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { IoMailOutline, IoPeople } from 'react-icons/io5';
import Link from 'next/link';
import useUserById from '@/data/useUserById';
import Repositories from '@/components/username/Repositories';

const Username: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;

  if (Array.isArray(username)) throw new Error('Invalid url');

  const { user } = useUserById(username);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/5 p-6 bg-gray-300 md:h-screen flex-shrink-0 shadow-md">
        <Link href="/">
          <button
            type="button"
            className="mb-4 text-black hover:bg-black hover:text-white py-1 px-2 rounded-lg border border-black transition duration-300"
          >
            Voltar
          </button>
        </Link>
        <div className="max-w-xs mx-auto">
          <img className="rounded-xl" src={user?.avatar_url} alt="" />
          <h2 className="font-bold text-2xl pt-3">{user?.name}</h2>
          <h3 className="font-medium text-lg text-gray-700">{user?.login}</h3>
          <p className="pt-4">{user?.bio}</p>

          <div className="flex items-center gap-x-2 py-4 flex-wrap">
            <IoPeople fontSize="1.2rem" className="flex-shrink-0" />
            <div className="flex items-center gap-x-1">
              <span className="font-bold">{user?.followers}</span> seguidores
            </div>

            <div className="flex items-center gap-x-1">
              <span className="font-bold">{user?.following}</span> seguindo
            </div>
          </div>

          {user?.email ? (
            <p className="pt-3 flex items-center gap-x-2">
              <IoMailOutline fontSize="1.2rem" /> {user.email}
            </p>
          ) : null}
        </div>
      </div>
      <Repositories />
    </div>
  );
};

export default Username;
