import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Pic from '../assets/pic.png'

function Projects() {

const itemData = [
  {
    img: Pic,
    title: 'John W'
  },
  {
    img: Pic,
    title: 'John W'
  },
  {
    img: Pic,
    title: 'John W'
  },
  {
    img: Pic,
    title: 'John W'
  },
  {
    img: Pic,
    title: 'John W'
  },
  {
    img: Pic,
    title: 'John W'
  },
  

]



  return (
    <div>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
        ))}
      </ImageList>
  </div>
  )
}

export default Projects