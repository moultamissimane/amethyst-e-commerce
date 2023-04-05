import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='carsouel__item'>
        <img
          className='d-block w-full '
          src='../../public/images/Amethyst.png'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item className='carsouel__item'>
        <img
          className='img-fluid d-block w-full '
          src='../../public/images/Sale_Banner.jpg'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item className='carsouel__item'>
        <img
          className='d-block w-full '
          src='../../public/images/Amet.jpg'
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
