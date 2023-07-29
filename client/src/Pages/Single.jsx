import React, { useContext, useEffect, useState } from 'react'
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Menu from '../component/Menu'
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split('/')[2];


  const { currentUser } = useContext(AuthContext);

  useEffect(() => {

    const fechingData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fechingData()
  }, [postId]);


  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/"); 
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='single'>
      <div className="content">
        <img src={`../upload/${post.img}`} alt="" />

        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}

          <div className="info">
            <span>{post?.username}</span>
            <p>Đăng {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write/?edit=${postId}`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <Link to={`/`}>
                <img onClick={handleDelete} src={Delete} alt="" />
              </Link>
            </div>
          )}
        </div>

        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>

      <div className="menu">
        <Menu cat={post.cat} />
      </div>
    </div>
  )
}

export default Single;
