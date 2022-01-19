import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import imag1 from '../images/slide-1.jpg'
import imag2 from '../images/slide-2.jpg'
import imag3 from '../images/slide-3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default class SliderCorousel extends Component {
    render() {
        return (
            <div>
                 <Carousel>
                <div>
                    <img src={imag1} />
                    <p className="legend">Legend 1</p>
                </div>
                
                <div>
                    <img src={imag2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={imag3} />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
            </div>
        )
    }
}
