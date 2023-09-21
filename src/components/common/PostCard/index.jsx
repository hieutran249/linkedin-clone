/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const PostCard = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div className='posts-card'>
      <p className='name' onClick={() => navigate('/profile')}>
        {post.userName}
      </p>
      <p className='timestamp'>{post.timeStamp}</p>
      <p className='status'>{post.status}</p>
    </div>
  );
};

export default PostCard;
