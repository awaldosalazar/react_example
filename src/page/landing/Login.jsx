import { useState } from 'react';
import { ValidateLogin } from '../../shared/api/login'
import "./styled.css";

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })
  const validateSesion = async() => {
    const isValid = await ValidateLogin(user);
  }
  return (
    <div className="container">
      \<h1>Company</h1>
      <div className="email">
        <label forhtml="email">Username</label>
        <div className="sec-2">
          <input type="email" name="email" placeholder="awaldos" 
          onChange={({target}) => setUser({...user, username: target.value})}
          />
        </div>
      </div>
      <div className="password">
        <label forhtml="password">Password</label>
        <div className="sec-2">
          <input
            className="pas"
            type="password"
            name="password"
            placeholder="············"
            onChange={({target}) => setUser({...user, password: target.value})}
          />
        </div>
      </div>
      
      <button className="login" onClick={validateSesion}>Login </button>
    </div>
  );
};

export default Login;
