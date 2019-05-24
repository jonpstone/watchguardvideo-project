import React from 'react';

const ImageOfTheDay = (props) => (
  <div>
    <div className="imageOftheDay">
      <img className="imageOfTheDay__display" src={props.data.url} alt="NASA" />
    </div>
    <div className="imageOfTheDay__detail">
      
    </div>
  </div>

);

export default ImageOfTheDay;