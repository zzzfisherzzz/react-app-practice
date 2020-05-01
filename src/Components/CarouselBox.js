import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpeg'
import slide3 from '../assets/slide3.jpeg'
import slide4 from '../assets/slide4.jpeg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={slide1} 
                        alt="slide1"
                    />
                    <Carousel.Caption>
                        <h3>Slider Title</h3>
                        <p>Slider description Slider description Slider descriptio. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={slide2} 
                        alt="slide2"
                    />
                    <Carousel.Caption>
                        <h3>Slider Title</h3>
                        <p>Slider description Slider description Slider descriptio. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={slide3} 
                        alt="slide3"
                    />
                    <Carousel.Caption>
                        <h3>Slider Title</h3>
                        <p>Slider description Slider description Slider descriptio. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={slide4} 
                        alt="slide5"
                    />
                    <Carousel.Caption>
                        <h3>Slider Title</h3>
                        <p>Slider description Slider description Slider descriptio. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;