/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../../../api/FirestoreAPI';
import LikeButton from '../LikeButton/index';
import './index.scss';

const PostCard = ({ post }) => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div className='posts-card'>
      <p className='name' onClick={() => navigate('/profile')}>
        {post.userName}
      </p>
      <p className='timestamp'>{post.timeStamp}</p>
      <p
        className='status'
        onClick={() => console.log(currentUser.userId, post.postId)}
      >
        {post.status}
      </p>

      {/* if the currentUser is loaded then pass it to LikeButton */}
      {currentUser.userId && (
        <LikeButton userId={currentUser.userId} postId={post.postId} />
      )}
    </div>
  );
};

export default PostCard;
