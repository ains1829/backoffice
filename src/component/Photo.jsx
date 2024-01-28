import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
function Photo({ photo }) {
  return (
    <Carousel fade>
      {
        photo.map((element, item) => (
          <Carousel.Item key={item}>
            <img
              className="d-block w-100"
              src={element}
              alt=""
            />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
};

export default Photo;
