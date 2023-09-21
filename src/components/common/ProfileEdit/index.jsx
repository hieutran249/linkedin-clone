/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { editProfile } from '../../../api/FirestoreAPI';
import { AiOutlineClose } from 'react-icons/ai';
import './index.scss';

const ProfileEdit = ({ currentUser, onEdit }) => {
  const [editInputs, setEditInputs] = useState(currentUser);

  const getInput = (event) => {
    const { name, value } = event.target;
    const input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = () => {
    editProfile(currentUser.userId, editInputs);
    onEdit();
  };

  // console.log(editInputs);

  return (
    <div className='profile-card'>
      <div className='edit-btn'>
        <AiOutlineClose className='close-icon' onClick={onEdit} size={25} />
      </div>

      <div className='profile-edit-inputs'>
        <label className='label'>Name</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='Name'
          className='common-input'
          name='name'
          value={currentUser?.name}
        />

        <label className='label'>Headline</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='Headline'
          className='common-input'
          name='headline'
          value={currentUser?.headline}
        />

        <label className='label'>Country</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='Country'
          className='common-input'
          name='country'
          value={currentUser?.country}
        />

        <label className='label'>City</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='City'
          className='common-input'
          name='city'
          value={currentUser?.city}
        />

        <label className='label'>Company</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='Company'
          className='common-input'
          name='company'
          value={currentUser?.company}
        />

        <label className='label'>Industry</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='Industry'
          className='common-input'
          name='industry'
          value={currentUser?.industry}
        />

        <label className='label'>College</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='College'
          className='common-input'
          name='college'
          value={currentUser?.college}
        />

        <label className='label'>Website</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='Website'
          className='common-input'
          name='website'
          value={currentUser?.website}
        />

        <label className='label'>About Me</label>
        <textarea
          onChange={getInput}
          placeholder='About Me'
          className='common-textArea'
          rows={5}
          name='aboutMe'
          value={currentUser?.aboutMe}
        />

        <label className='label'>Skills</label>
        <input
          onChange={getInput}
          type='text'
          placeholder='Skills'
          className='common-input'
          name='skills'
          value={currentUser?.skills}
        />
      </div>

      <div className='save-container'>
        <button className='save-btn' onClick={updateProfileData}>
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
