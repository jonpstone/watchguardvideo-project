import React from 'react';

const ImageOfTheDay = (props) => (
  <div className="imageOftheDay">
    <img id="imageOfTheDay__display--one" src={props.CameraOne} alt="NASA1" />
    <img id="imageOfTheDay__display--two" src={props.CameraTwo} alt="NASA2" />
    <img id="imageOfTheDay__display--three" src={props.CameraThree} alt="NASA3" />
    <img id="imageOfTheDay__display--four" src={props.CameraFour} alt="NASA4" />
  </div>
);

export default ImageOfTheDay;