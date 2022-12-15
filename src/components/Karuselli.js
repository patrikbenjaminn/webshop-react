import Carousel from 'react-bootstrap/Carousel';
import '../styles/Karuselli.css'; 

function CarouselFadeExample() {
  return (
    <Carousel uncontrolled className='karuselli'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/Konsolipelit/zelda.png"
          alt="First slide"
        />
        <Carousel.Caption>
           <h2>First slide label</h2> 
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/lautapelit/trivial pursuit.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Second slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/lautapelit/monopoly.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h4>Third slide label</h4>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;