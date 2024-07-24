import React from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';
import videos from '../Pages/data/VideoData';  // Import photos
import photos from '../Pages/data/PhotoData';  // Import videos
import '../Pages/CSS/Gallery.css'; // Import CSS for styling
import Footer from './Footer';

const Gallery = () => {
  



  return (
    <div>
    <Container>
      {/* Photo Carousel */}
      <h2 className="my-4">Photo Gallery</h2>
      <Carousel>
        {photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={photo.src}
              alt={photo.alt}
            />
            <Carousel.Caption>
              <h3>{photo.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Video Cards */}
      <h2 className="my-4">Video Gallery</h2>
      <div className="video-gallery">
        {videos.map((video, index) => (
          <Card key={index} className="mb-4">
            <video controls width="100%">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Card.Body>
              <Card.Title>{video.title}</Card.Title>
              <Card.Text>{video.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
    {/* <Footer/> */}
    </div>
  );
};

export default Gallery;
