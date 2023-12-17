import React from 'react'

// eslint-disable-next-line react/prop-types
const Post = ({title, date, body}) => {
  return (
    <div>
        <h3> {title} </h3>
        <p>{date}</p>
        <p> {body} </p>
    </div>
  )
}

export default Post