import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageOfTheDay = (props) => (
  <div className="imageOftheDay">
    {props.Cameras.map((img) => (
      <LazyLoadImage
        key={img}
        className = "camImg"
        src={img}
        alt = "NASA1"
        effect="blur"
      />
      )
    )}
  </div>
);

export default ImageOfTheDay;