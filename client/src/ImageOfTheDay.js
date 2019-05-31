import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageOfTheDay = (props) => (
  <div>
    <div className="imageOftheDay">
      <LazyLoadImage
        className = "camImg"
        src={props.CameraOne}
        alt = "NASA1"
        effect="blur"
      />
      <LazyLoadImage
        className = "camImg"
        src={props.CameraTwo}
        alt = "NASA2"
        effect="blur"
      />
      <LazyLoadImage
        className = "camImg"
        src={props.CameraThree}
        alt = "NASA3"
        effect="blur"
      />
      <LazyLoadImage
        className = "camImg"
        src={props.CameraFour}
        alt = "NASA4"
        effect="blur"
      />
    </div>
  </div>
);

export default ImageOfTheDay;