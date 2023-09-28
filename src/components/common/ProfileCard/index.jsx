/* eslint-disable react/prop-types */
import { useState, useMemo } from 'react';
import { getPosts } from '../../../api/FirestoreAPI';
import PostCard from '../PostCard';
import { AiFillEdit } from 'react-icons/ai';
import './index.scss';

const ProfileCard = ({ currentUser, onEdit }) => {
  const [allPosts, setallPosts] = useState([]);

  useMemo(() => {
    getPosts(setallPosts);
  }, []);

  return (
    <>
      <div className='profile-card'>
        <div className='edit-btn'>
          <AiFillEdit className='edit-icon' onClick={onEdit} size={20} />
        </div>

        <div className='profile-info'>
          <div>
            <h3 className='userName'>{currentUser.name}</h3>
            <p className='heading'>{currentUser?.headline}</p>
            <p>
              {currentUser?.city}, {currentUser?.country}
            </p>
            <a
              className='website'
              href={currentUser.website}
              target='_blank'
              rel='noreferrer'
            >
              Website
            </a>
          </div>

          <div className='right-info'>
            <p className='college'>{currentUser?.college}</p>
            <p className='company'>{currentUser?.company}</p>
          </div>
        </div>
        <p className='about'>{currentUser?.aboutMe}</p>
        <p>
          <span className='skill-label'>Skills:&nbsp;</span>
          {currentUser?.skills}
        </p>
      </div>

      <div className='post-status-main'>
        {allPosts
          .filter((post) => {
            return post.userEmail === currentUser.email;
          })
          .map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
      </div>
    </>
  );
};

export default ProfileCard;
