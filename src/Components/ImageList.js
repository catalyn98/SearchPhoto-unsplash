import './ImageList.css';
import React from 'react';
import ImageCrad from './ImageCrad';

const ImageList = props => {
  const images = props.images.map(image => {
    return <ImageCrad key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;