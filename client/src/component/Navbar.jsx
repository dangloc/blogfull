import React, { useContext } from 'react'
import Logo from '../img/logo-thuonghieu.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Navbar = () => {

  const {currentUser, logout} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <div className="link">
            <Link to="/?cat=estate">
              <h6>Estate</h6>
            </Link>
          </div>

          <div className="link">
            <Link to="/?cat=home">
              <h6>Home</h6>
            </Link>
          </div>

          <div className="link">
            <Link to="/?cat=news">
              <h6>News</h6>
            </Link>
          </div>
        </div>

        <div className="isUser">
          <span>{currentUser?.username}</span>
          {currentUser ? <span className='btn-logout' onClick={logout}>Đăng xuất</span> : <Link className='link btn-login' to='/login'>Đăng nhập</Link>}
          <span className='write'>
            <Link to="/write">
              <h6>Viết bài</h6>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
export default Navbar;