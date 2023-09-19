/* eslint-disable react/prop-types */
import React from 'react';
import './index.scss';

const PostCard = ({ post }) => {
  return (
    <div className='posts-card'>
      <p className='name'>{post.userEmail}</p>
      <p className='timestamp'>{post.timeStamp}</p>
      <p className='status'>{post.status}</p>
    </div>
  );
};

export default PostCard;
