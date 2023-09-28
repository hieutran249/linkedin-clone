/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from 'react';
import { getLikesByPost, likePost } from '../../../api/FirestoreAPI';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import './index.scss';

const LikeButton = ({ userId, postId }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    likePost(userId, postId, liked, setLiked);
  };

  useEffect(() => {
    if (userId) getLikesByPost(userId, postId, setLikesCount, setLiked);
  }, [userId, postId, liked]);

  return (
    <div className='like-container'>
      <p>{likesCount} people has liked this post</p>

      <div className='hr-line'>
        <hr />
      </div>

      <div className='like-inner'>
        {/* check if user has liked the post then change the like icon */}
        {liked ? (
          <>
            <AiFillLike size={35} color='#0072b1' onClick={handleLike} />
            <p className='blue'>Like</p>
          </>
        ) : (
          <>
            <AiOutlineLike size={35} onClick={handleLike} />
            <p className='black'>Like</p>
          </>
        )}
      </div>
    </div>
  );
};

export default LikeButton;
