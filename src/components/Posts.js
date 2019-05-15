import React from 'react'
import PropTypes from 'prop-types'

const Posts = ({posts}) => (
  <div>
    {posts.map((post, i) =>
      <div key={i}>{post.title}</div>
    )}
  </div>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
