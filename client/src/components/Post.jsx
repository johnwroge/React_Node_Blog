import React from 'react'
import './post.css';

// eslint-disable-next-line react/prop-types
const Post = ({title, date, description, img}) => {
   
  return (
    <div className='Post'>
        <img src={img} />
        
        <h3> {title} </h3>
        <p>{date}</p>
        <p> {description} </p>
    </div>
  )
}

export default Post