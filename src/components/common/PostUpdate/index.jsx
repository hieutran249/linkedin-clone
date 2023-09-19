import React, { useState } from 'react';
import ModalComponent from '../Modal';
import { PostStatus } from '../../../api/FirestoreAPI';
import './index.scss';

const PostStatusComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState('');
  const sendStatus = async () => {
    PostStatus(status);
    setModalOpen(false);
    setStatus('');
  };

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
        sendStatus={sendStatus}
      />
    </div>
  );
};

export default PostStatusComponent;
