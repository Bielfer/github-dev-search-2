/* eslint react/jsx-props-no-spreading:"off" */

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import useFetcher from '@/data/useFetcher';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { get } = useFetcher();

  return (
    <SWRConfig value={{ fetcher: get }}>
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default MyApp;
