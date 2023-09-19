import React, { useState } from 'react';
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI';
import LinkedinLogo from '../assets/linkedin_logo.png';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Sass/LoginComponent.scss';

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await LoginAPI(credentials.email, credentials.password);
      toast.success('Signed in to Linkedin');
      localStorage.setItem('userEmail', res.user.email);
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error('Please check your credentials!');
    }
  };

  const googleSignIn = () => {
    const res = GoogleSignInAPI();
    console.log(res);
  };

  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo} alt='Linkedin Logo' className='linkedinLogo' />

      <div className='login-wrapper-inner'>
        <h1 className='heading'>Sign in</h1>
        <p className='sub-heading'>Stay updated on your professional world</p>

        <div className='auth-inputs'>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type='email'
            className='common-input'
            placeholder='Enter your email'
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type='password'
            className='common-input'
            placeholder='Enter your password'
          />
        </div>

        <p>Forgot password?</p>

        <button onClick={login} className='login-btn'>
          Login to Linkedin
        </button>
      </div>

      <hr className='hr-text' data-content='or' />

      <div className='google-btn-container'>
        <GoogleButton className='google-btn' onClick={googleSignIn} />

        <p className='go-to-signup'>
          New to Linkedin?{' '}
          <span className='join-now' onClick={() => navigate('/register')}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
}
