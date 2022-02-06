export const sortRepos = {
  'stars-asc': (a: Repo, b: Repo) => a.stargazers_count - b.stargazers_count,
  'stars-desc': (a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count,
};

export type SortRepos = 'stars-asc' | 'stars-desc';
