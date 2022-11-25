import Carousel from 'react-bootstrap/Carousel';
import '../styles/Karuselli.css'; 

function CarouselFadeExample() {
  return (
    <Carousel fade className='karuselli'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\shakki.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\ohjain.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=".\images\videopeli.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        {/*   <h3>Third slide label</h3> */}
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;