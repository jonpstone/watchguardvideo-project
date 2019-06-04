import React from 'react';
import { Image, Modal } from 'semantic-ui-react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImageOfTheDay = (props) => (
  <div className="imageOftheDay">
    {/* Iterate over props and render images using 3rd party lazy loader component and 
        SemanticUI Modal component used for onClick functionality to render larger 
        selected image */}
    {props.Cameras.map((img) => (
      <Modal trigger={
        <LazyLoadImage
          key={img}
          className="camImg"
          src={img}
          alt="NASA1"
          effect="blur"
        />
      }>
        <Modal.Content image>
          <Image className="modalStyles" centered={true} src={img}/>
        </Modal.Content>
      </Modal>
    ))}
  </div>
);

export default ImageOfTheDay;