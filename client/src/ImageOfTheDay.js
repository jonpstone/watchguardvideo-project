import React from 'react';

const ImageOfTheDay = (props) => (
  <div>
    <div className="imageOftheDay">
      <img className="camImg" src={props.CameraOne} alt="NASA1" />
      <img className="camImg" src={props.CameraTwo} alt="NASA2" />
      <img className="camImg" src={props.CameraThree} alt="NASA3" />
      <img className="camImg" src={props.CameraFour} alt="NASA4" />
    </div>
  </div>
);

export default ImageOfTheDay;