/* eslint-disable react/prop-types */
import React from 'react';
import { onLogout } from '../../../api/AuthAPI';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './index.scss';

const ProfilePopup = ({ currentUser }) => {
  const navigate = useNavigate();

  return (
    <div className='popup-card'>
      <p className='name'>{currentUser?.name}</p>
      <p className='headline'>{currentUser?.headline}</p>
      <Button
        className='popup-option'
        title='View Profile'
        shape='round'
        onClick={() => navigate('/profile')}
      >
        View Profile
      </Button>
      <Button
        className='popup-option'
        title='Log out'
        shape='round'
        onClick={onLogout}
      >
        Log out
      </Button>
    </div>
  );
};

export default ProfilePopup;
