import React from 'react';
import LinkedinLogo from '../../../assets/linkedin_logo.png';
import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineBell,
} from 'react-icons/ai';
import { BsBriefcase, BsChatDots } from 'react-icons/bs';
import User from '../../../assets/user.png';
import './index.scss';

const TopBar = () => {
  return (
    <div className='topbar-main'>
      <img src={LinkedinLogo} alt='Linkedin Logo' className='linkedin-logo' />
      <div className='react-icons'>
        <AiOutlineSearch className='react-icon' size={25} />
        <AiOutlineHome className='react-icon' size={25} />
        <AiOutlineUser className='react-icon' size={25} />
        <BsBriefcase className='react-icon' size={25} />
        <BsChatDots className='react-icon' size={25} />
        <AiOutlineBell className='react-icon' size={25} />
      </div>
      <img src={User} alt='User Logo' className='user-logo' />
    </div>
  );
};

export default TopBar;
