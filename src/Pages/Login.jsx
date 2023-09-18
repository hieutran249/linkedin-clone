import { useEffect, useState } from 'react';
import LoginComponent from '../components/LoginComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Loader from '../components/common/Loader/Loader';

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate('/');
      } else {
        setLoading(false);
      }
    });
  }, []);

  return loading ? <Loader /> : <LoginComponent />;
};

export default Login;
