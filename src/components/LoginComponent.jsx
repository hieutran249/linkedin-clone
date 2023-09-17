import React, { useState } from 'react';
import { LoginAPI, RegisterAPI } from '../api/AuthAPI';
import '../Sass/LoginComponent.scss';

const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let response = await LoginAPI(credentials.email, credentials.password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='login-wrapper'>
      <h1>LoginComponent</h1>
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

      <button onClick={login} className='login-btn'>
        Login to Linkedin
      </button>
    </div>
  );
};

export default LoginComponent;
