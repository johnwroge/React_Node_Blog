import React from 'react'
import { useState } from 'react'
import Post from './Post'

const Blog = () => {
  const [posts, setPosts] = useState([])


const postList = [
  {
  title: "Johns First Post",
  date: "12-16-2023",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
  " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
  " reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" +
   " pariatur. Excepteur sint occaecat cupidatat non proident, sunt in" +
   " culpa qui officia deserunt mollit anim id est laborum." 
},
{
  title: "Johns Second Post",
  date: "12-16-2023",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
  " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
  " reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" +
   " pariatur. Excepteur sint occaecat cupidatat non proident, sunt in" +
   " culpa qui officia deserunt mollit anim id est laborum." 
},
{
  title: "Johns Third Post",
  date: "12-16-2023",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
  " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
  " reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" +
   " pariatur. Excepteur sint occaecat cupidatat non proident, sunt in" +
   " culpa qui officia deserunt mollit anim id est laborum."  
},
{
  title: "Johns Fourth Post",
  date: "12-16-2023",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit" +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris" +
  " nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
  " reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla" +
   " pariatur. Excepteur sint occaecat cupidatat non proident, sunt in" +
   " culpa qui officia deserunt mollit anim id est laborum." 
}

]

const display = postList.map((post,i) => (
  <Post key = {i} {...post}/> 
))

  return (
    <div>
      Blog
      {display}
      </div>

  )
}

export default Blog