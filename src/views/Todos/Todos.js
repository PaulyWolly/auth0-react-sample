import React from 'react'
import { useState, useEffect } from 'react'
//import { Loading } from '../../components'
import axios from 'axios'
import PostList from '../../components/PostList/PostList';

import './Todos.css'
import LoadingAlt from './../../components/Loading-alt/LoadingAlt';

function Todos(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      console.table(result.data)
      setPosts(result.data)
    })
  },[]) // [] only fires one time when the component load

  return (
    <div className="todos-container">
      {/* <Loading /> */}
      <LoadingAlt />
      {posts && <PostList posts={posts} />}
    </div>
  )
}

export default Todos