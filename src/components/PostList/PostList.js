import 'bootstrap/dist/css/bootstrap.min.css'

const PostList = ({ posts }) => {
  return (

    <ul className="list-group">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
          {post.id} - {post.title}
          {post.body}
        </li>
      ))}
    </ul>
  )
}

export default PostList