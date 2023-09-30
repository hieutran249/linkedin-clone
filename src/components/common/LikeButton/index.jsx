/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import {
  getLikesByPost,
  likePost,
  createComment,
  getComments,
} from '../../../api/FirestoreAPI';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';
import { AiOutlineLike, AiFillLike, AiOutlineComment } from 'react-icons/ai';
import { BsSend, BsSendFill } from 'react-icons/bs';
import './index.scss';

const LikeButton = ({ userId, postId, currentUser }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [showCommentBox, setShowCommentBox] = useState(false);

  const handleLike = () => {
    likePost(userId, postId, liked, setLiked);
  };

  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    createComment(
      postId,
      currentUser?.name,
      comment,
      getCurrentTimeStamp('LLL')
    );
    // getComments(postId, setComments);
    // console.log(comments);
    setComment('');
  };

  useEffect(() => {
    if (userId) getLikesByPost(userId, postId, setLikesCount, setLiked);
  }, [userId, postId, liked]);

  useEffect(() => {
    getComments(postId, setComments);
  }, [postId, comments]);

  return (
    <div className='like-container'>
      <p>{likesCount} people has liked this post</p>

      <div className='hr-line'>
        <hr />
      </div>

      <div className='like-comment'>
        {/* Like Btn */}
        <div className='likes-comment-inner'>
          {/* check if user has liked the post then change the like icon */}
          {liked ? (
            <>
              <AiFillLike size={30} color='#0072b1' onClick={handleLike} />
              <p className='blue'>Like</p>
            </>
          ) : (
            <>
              <AiOutlineLike size={30} onClick={handleLike} />
              <p className='black'>Like</p>
            </>
          )}
        </div>

        {/* Comment Btn */}
        <div
          className='likes-comment-inner'
          onClick={() => {
            setShowCommentBox(!showCommentBox);
          }}
        >
          {showCommentBox ? (
            <>
              <AiOutlineComment size={30} color='#0a66c2' />
              <p style={{ color: '#0a66c2' }}>Comment</p>
            </>
          ) : (
            <>
              <AiOutlineComment size={30} />
              <p>Comment</p>
            </>
          )}
        </div>
      </div>

      {/* Comment Box */}
      {showCommentBox ? (
        <div className='comment-container'>
          <div className='comment-input-btn'>
            {/* Comment Input */}
            <input
              placeholder='Add a comment'
              className='comment-input'
              onChange={getComment}
              name='comment'
              value={comment}
            />

            {/* Add Comment Btn */}
            {comment.length > 0 ? (
              <BsSendFill color='#0a66c2' size={25} onClick={addComment} />
            ) : (
              <BsSend size={25} onClick={addComment} />
            )}
          </div>

          {/* Comments of Post */}
          {comments.length > 0
            ? comments.map((comment) => {
                return (
                  <div key={comment.commentId} className='all-comments'>
                    <p className='name'>{comment.user}</p>
                    <p className='timestamp'>{comment.timeStamp}</p>
                    <p className='comment'>{comment.comment}</p>
                  </div>
                );
              })
            : null}
        </div>
      ) : null}
    </div>
  );
};

export default LikeButton;
