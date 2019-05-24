import React from 'react';

const ImageOfTheDay = (props) => (
  <div>
    <div className="imageOftheDay">
      <img id="imageOfTheDay__display--one" src={props.CameraOne} alt="NASA1" />
      <img id="imageOfTheDay__display--two" src={props.CameraTwo} alt="NASA2" />
      <img id="imageOfTheDay__display--three" src={props.CameraThree} alt="NASA3" />
      <img id="imageOfTheDay__display--four" src={props.CameraFour} alt="NASA4" />
    </div>
    <h1 id="dateReminder">SHOWING IMAGES FOR {props.Month}/{props.Day}/{props.Year}</h1>
  </div>
);

export default ImageOfTheDay;