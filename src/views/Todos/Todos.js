/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PostList from '../../components/PostList/PostList';
import LoadingAlt from './../../components/Loading-alt/LoadingAlt';

import './Todos.css'

function Todos(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      console.table(result.data)
      setPosts(result.data)
    })
  },[]) // [] only fires one time when the component load

  const onViewJSONHandler = (props) => {
    window.open(`https://jsonplaceholder.typicode.com/posts`)
  }

  return (
    <div className="posts-container">
      <br />
      <h3 className='todos-title-text'>This is a call to the JSONPlaceholder 'fake API' website <br/>
      to show a response to a REST API call, doing a GET request</h3>
      <div className="btn-53">
        <button
          className="button-53 mt-3"
          role="button"
          onClick={onViewJSONHandler}
        ><span className='button-text' >View JSON file</span>
        </button>
      </div>
      <p>&nbsp;</p>
      <div className="todos-container">
        <LoadingAlt />
        {posts && <PostList posts={posts} />}
      </div>

    </div>
  )
}

export default Todos