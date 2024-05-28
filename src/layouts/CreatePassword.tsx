import "../styles/createpassword.css";
import  { useState } from 'react';

const CreatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e:any) => {
    setConfirmPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberPasswordChange = (e:any) => {
    setRememberPassword(e.target.checked);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Password set successfully!');
      // handle password save logic here
    } else {
      console.log('Passwords do not match!');
    }
  };

  return (
    <div className="App">
      <div className="password-form">
        <h1>SciFi</h1>
        <h2>Create Password</h2>
        <p>Hello Anthony!</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Password*</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="input-group">
            <label>Confirm Password*</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              checked={rememberPassword}
              onChange={handleRememberPasswordChange}
            />
            <label>Remember password?</label>
          </div>
          <button type="submit" className="submit-btn">
            Save Password
          </button>
        </form>
        <a href="/home">Back to home? Click Here</a>
      </div>
    </div>
  );
}

export default CreatePassword