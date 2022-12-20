import Carousel from 'react-bootstrap/Carousel';
import '../styles/Karuselli.css'; 

function CarouselFadeExample() {
  return (
    <Carousel uncontrolled="true" className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/karuselli/kortti.png"
          alt="First slide"
          
        />
        <Carousel.Caption>
           <h2></h2> 
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/karuselli/paidat.png" 
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2>Pukeudu tyylikkäästi RGH tuotteilla</h2>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/karuselli/magic cards.png"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>MtG Kortit saatavilla NYT!</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;