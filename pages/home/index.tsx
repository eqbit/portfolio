import React from 'react';
import { NextPage } from 'next';
import PageWrapper from '@components/page-wraper';
import FirstScreen from '@components/first-screen';

const Home: NextPage = () => {
  return (
    <PageWrapper title="Eqbit's portfolio">
      <FirstScreen/>
    </PageWrapper>
  );
};

export default Home;
