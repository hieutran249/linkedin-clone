/* eslint-disable react/prop-types */
import React from 'react';
import PostStatus from './common/PostUpdate';

const HomeComponent = ({ currentUser }) => {
  return (
    <div>
      <PostStatus currentUser={currentUser} />
    </div>
  );
};

export default HomeComponent;
