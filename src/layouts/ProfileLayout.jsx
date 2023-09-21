import React, { useMemo, useState } from 'react';
import { getCurrentUser } from '../api/FirestoreAPI';
import Profile from '../Pages/Profile';
import TopBar from '../components/common/TopBar';

const ProfileLayout = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div>
      <TopBar currentUser={currentUser} />
      <Profile currentUser={currentUser} />
    </div>
  );
};

export default ProfileLayout;
