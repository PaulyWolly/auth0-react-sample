/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-undef */
import 'bootstrap/dist/css/bootstrap.min.css'
import './PostList.css'

const PostList = ({ posts }) => {

  return (
    <div>

      <ul className="list-group">
        {posts.map((post) => (
          <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
            ({post.id}) {post.title.toUpperCase()}
            <br/>
            {post.body}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default PostList