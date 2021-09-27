import React from 'react'
import {images} from '../../dummy/image';
import ImageItem from './ImageItem';
function ImageList() {
  
  return (
    <div>
      {images.map(image =>  
          <ImageItem key = {image.id} {...image}>
          </ImageItem>
        )}      
    </div>
  )
}

export default ImageList
