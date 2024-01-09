import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image_test from '../assets/image/occasion.jpg'
import image_other from '../assets/image/6034768.jpg'
const Photo = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_test}
          alt="Première image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image_other}
          alt="Deuxième image"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Photo;
