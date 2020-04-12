import React from 'react';
import Head from 'next/head';
import Header from '@components/header';
import Footer from '@components/footer';

interface Props {
  title?: string;
}

const PageWrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Eqbit\'s portfolio'}</title>
      </Head>
      <div className="page-wrapper">
        <Header/>
        <div className="page-inner">
          {children}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default PageWrapper;
