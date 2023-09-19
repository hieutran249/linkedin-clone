import React, { useState } from 'react';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthAPI';
import LinkedinLogo from '../assets/linkedin_logo.png';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Sass/LoginComponent.scss';

export default function RegisterComponent() {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  const register = async () => {
    try {
      const res = await RegisterAPI(credentials.email, credentials.password);
      toast.success('Account created');
      localStorage.setItem('userEmail', res.user.email);
      navigate('/login');
    } catch (error) {
      console.log(error);
      toast.error('Cannot create your account!');
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
        <h1 className='sign-up-heading'>
          Make the most of your professional life
        </h1>

        <div className='auth-inputs'>
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type='email'
            className='common-input'
            placeholder='Email or phone number'
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type='password'
            className='common-input'
            placeholder='Password (6 or more characters)'
          />
        </div>

        <br />

        <button onClick={register} className='login-btn'>
          Agree and Join
        </button>
      </div>

      <hr className='hr-text' data-content='or' />

      <div className='google-btn-container'>
        <GoogleButton className='google-btn' onClick={googleSignIn} />

        <p className='go-to-signup'>
          Already on Linkedin?{' '}
          <span className='join-now' onClick={() => navigate('/login')}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
