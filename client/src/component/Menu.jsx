import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  
  useEffect(() =>{

    const fechingData = async () => {
      try{
        const res =  await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      }catch(err){
        console.log(err);
      }
    }

    fechingData()
  }, [cat])
 

  return (
    <div className='menu'>
      <h1>Bài viết khác</h1>

      {posts.map((post) => (
        <div className="post" key={post.id}>
           <img src={`../upload/${post.img}`} alt="" />
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <Link to={`/post/${post.id}`}>
            <button>Xem thêm</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Menu