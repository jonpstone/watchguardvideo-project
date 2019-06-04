import React from 'react';
import { Image, Modal } from 'semantic-ui-react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const styles = {
  height: '90vh',
  width: '90vh'
}

const ImageOfTheDay = (props) => (
  <div className="imageOftheDay">
    {props.Cameras.map((img) => (
      <Modal trigger={
        <LazyLoadImage
          key={img}
          className = "camImg"
          src={img}
          alt = "NASA1"
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