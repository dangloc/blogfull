import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const [err, setErr] = useState(null);

  const {login} = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
       navigate('/');
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className='auth'>
      <h1>Đăng nhập</h1>
      <form action="">
        <input required type="text" placeholder='Tên đăng nhập...' name='username' onChange={handleChange} />
        <input required type="password" placeholder='Mật khẩu...' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Đăng nhập</button>
        {err && <p>{err}</p>}
        <span>Chưa có tài khoản? <Link to='/register'>Đăng kí</Link></span>
      </form>
    </div>
  )
}
export default Login;
