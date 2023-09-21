/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import ModalComponent from '../Modal';
import PostCard from '../PostCard';
import { createPost, getPosts } from '../../../api/FirestoreAPI';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import './index.scss';

const PostStatus = ({ currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [allPosts, setallPosts] = useState([]);

  const sendPost = async () => {
    const post = {
      status,
      timeStamp: getCurrentTimeStamp('LLL'),
      userEmail: currentUser.email,
      userName: currentUser.name,
    };
    createPost(post);
    setModalOpen(false);
    setStatus('');
  };

  useMemo(() => {
    getPosts(setallPosts);
  }, []);

  return (
    <div className='post-status-main'>
      <div className='post-status'>
        <button className='open-post-modal' onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
      </div>

      <ModalComponent
        status={status}
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sendPost={sendPost}
      />

      {allPosts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostStatus;
