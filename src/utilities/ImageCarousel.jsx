import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ images }) => {
  return (
    <div style={{ overflow: 'hidden', marginTop: '20px', width: '100%' }}>
      <Carousel style={{ width: '100%', margin: 'auto' }}>
        {images.map((image, index) => (
          <Carousel.Item key={index} style={{ width: '100%' }}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Image ${index + 1}`}
              style={{ objectFit: 'cover', width: '100%' }}
            />
            <Carousel.Caption>
              {/* Add any caption text here, if needed */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
