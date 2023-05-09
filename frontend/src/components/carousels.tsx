import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect}>
    //   <Carousel.Item className='carsouel__item'>
    //     <img
    //       className='d-block w-full '
    //       src='../../public/images/Amethyst.png'
    //       alt='First slide'
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item className='carsouel__item'>
    //     <img
    //       className='img-fluid d-block w-full '
    //       src='../../public/images/Am.png'
    //       alt='Second slide'
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item className='carsouel__item'>
    //     <img
    //       className='d-block w-full '
    //       src='../../public/images/Amet.jpg'
    //       alt='Third slide'
    //     />
    //   </Carousel.Item>
    // </Carousel>
    <div className='container flex justify-between items-center' style={{backgroundColor: "#EEE7DA", }}>
      <div className=''>
        <h1>DISCOVER WORLD’S BEST JEWELRY</h1>
        <p>Our platform provides excellent customer service and fast shipping,
          making it a reliable choice for customers looking for a hassle-free shopping experience.</p>
      </div>
      <div className=''>
        <img width={400} height={400} src="../public/images/home-image.png" alt="" />
      </div>
    </div>
  );
};

export default Carousels;
