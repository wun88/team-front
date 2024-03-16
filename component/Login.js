import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직 추가
    console.log(`Logging in with username: ${username}, password: ${password}`);
  };

  return (
    <div className='MainContainer'>
      <div className='TopBox'>
        <h1 className='TopText'>로그인</h1>
      </div>
      <div className='MidBox'>
        <div className='IdBox'>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='ID'
            className='IdInputBox'
          />
        </div>
        <div className='PwBox'>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='PwInputBox'
          />
        </div>
        <div className='SummitBox'>
          <button className='Summit' type="button" onClick={handleLogin}>
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;