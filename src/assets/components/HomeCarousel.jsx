

import Carousel from 'react-bootstrap/Carousel';

import { Image } from "react-bootstrap";

function HomeCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image className="w-100" src="/slides/slide1.jpg" alt=""></Image>
               
            </Carousel.Item>
            <Carousel.Item>
                <Image className="w-100" src="/slides/slide2.jpg" alt=""></Image>
               
            </Carousel.Item>
            <Carousel.Item>
                <Image className="w-100" src="/slides/slide3.jpg" alt=""></Image>
               
            </Carousel.Item>
        </Carousel>
    );
}




export default HomeCarousel;