import React, { useState } from 'react'
import './post.css';

// eslint-disable-next-line react/prop-types
const Post = ({title, date, description, img}) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };
  
   
  return (
    <div className={`Post ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
        <img src={img} />
        
        <h3> {title} </h3>
        <p>{date}</p>
        <p> {description} </p>
    </div>
  )
}

export default Post