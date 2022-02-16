/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingSpin from './../../components/Loading-spin/LoadingSpin';
import PostList from '../../components/PostList/PostList';

import './Todos.css'

function Todos(props) {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      console.log(result.data)
      setPosts(result.data)
    })
  },[]) // [] only fires one time when the component load

  const onViewJSONHandler = (props) => {
    window.open(`https://jsonplaceholder.typicode.com/posts`)
  }

  const refreshTodos = () => {
    // clear data
    setPosts('')
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
      console.log(result.data)
      setPosts(result.data)
    })
  }


  return (
    <div className="posts-container">
      <br />
      <h3 className='todos-title-text lead'>This page shows a call to the JSONPlaceholder 'fake' API website
      which receives a response to a REST API <br/>call,
      with a GET request using React Axios and the useEffect hook. Since the data is Asynchronous
      I have <br/>configured a Bootstrap 'spinner' as well. Press 'Refresh Dataset' to see spinner.</h3>
      <button className='refresh-btn btn-sm btn-success' onClick={refreshTodos} >Refresh Dataset</button>

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
        <LoadingSpin />
        {posts && <PostList posts={posts} />}
      </div>

    </div>
  )
}

export default Todos