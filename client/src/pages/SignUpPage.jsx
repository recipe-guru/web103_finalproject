import React, { useState, useContext } from 'react';
import { signupUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();

  const handleSignup = () => {
    signupUser(username, email, password)
      .then((data) => {
        setUser(data);
        navigate('/');
      })
      .catch((error) => {
        setErrorMessage(error.message || 'An error occurred. Please try again.');
      });
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button className='login-button' onClick={handleSignup}>Sign Up</button>
      <a href="/login" className="signup-link">Already have an accout? Login</a>
    </div>
  );
}

export default SignupPage;
