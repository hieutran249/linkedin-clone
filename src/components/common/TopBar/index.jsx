/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ProfilePopup from '../ProfilePopup';
import LinkedinLogo from '../../../assets/linkedin_logo.png';
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBell,
} from 'react-icons/ai';
import { BsBriefcase, BsChatDots } from 'react-icons/bs';
import User from '../../../assets/user.png';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const TopBar = ({ currentUser }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const goToRoute = (route) => {
    navigate(route);
  };

  const displayProfilePopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className='topbar-main'>
      <img src={LinkedinLogo} alt='Linkedin Logo' className='linkedin-logo' />
      <div className='react-icons'>
        <AiOutlineSearch className='react-icon' size={25} />
        <AiOutlineHome
          className='react-icon'
          size={25}
          onClick={() => goToRoute('/')}
        />
        <AiOutlineUser
          className='react-icon'
          size={25}
          onClick={() => goToRoute('/profile')}
        />
        <BsBriefcase className='react-icon' size={25} />
        <BsChatDots className='react-icon' size={25} />
        <AiOutlineBell className='react-icon' size={25} />
      </div>
      <img
        src={User}
        alt='User Logo'
        className='user-logo'
        onClick={displayProfilePopup}
      />
      {/* displaying profile popup */}
      {popupVisible ? (
        <div className='popup-position'>
          <ProfilePopup currentUser={currentUser} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TopBar;
