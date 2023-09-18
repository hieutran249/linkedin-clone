import React from 'react';
import Home from '../Pages/Home';
import TopBar from '../components/common/TopBar';

const HomeLayout = () => {
  return (
    <div>
      <TopBar />
      <Home />
    </div>
  );
};

export default HomeLayout;
