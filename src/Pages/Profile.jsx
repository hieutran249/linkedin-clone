/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ProfileComponent from '../components/ProfileComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader/Loader';

const Profile = ({ currentUser }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      // console.log(res);
      if (!res?.accessToken) {
        navigate('/login');
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Loader /> : <ProfileComponent currentUser={currentUser} />;
};

export default Profile;
