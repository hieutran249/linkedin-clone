import React, { useMemo, useState } from 'react';
import { getCurrentUser } from '../api/FirestoreAPI';
import Home from '../Pages/Home';
import TopBar from '../components/common/TopBar';

const HomeLayout = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    localStorage.setItem('currentUser', currentUser);
  }, []);

  return (
    <div>
      <TopBar />
      <Home currentUser={currentUser} />
    </div>
  );
};

export default HomeLayout;
