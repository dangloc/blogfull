import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       await axios.post("/auth/register", inputs);
       navigate('/login');
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className='auth'>
      <h1>Đăng nhập</h1>
      <form action="">
        <input required type="text" placeholder='Tên đăng nhập...' name='username' onChange={handleChange} />
        <input required type="email" placeholder='Email...' name='email' onChange={handleChange} />
        <input required type="password" placeholder='Mật khẩu...' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Đăng nhập</button>
        {err && <p>{err}</p>}
        <span>Đã có tài khoản? <Link to='/login'>Đăng kí</Link></span>
      </form>
    </div>
  )
}

export default Register;