import React, { Component } from 'react';
import s1 from '../images/s1.webp'
import s2 from '../images/s2.webp'
import s3 from '../images/s3.webp'
import s4 from '../images/s4.webp'
import s5 from '../images/s5.webp'
import s6 from '../images/s6.webp'
import s7 from '../images/s7.webp'

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.slides = [s1,s2,s3,s4,s5,s6,s7];
  }

  plusDivs = (n) => {
    this.showDivs(this.state.slideIndex + n);
  }

  showDivs = (n) => {
    const maxIndex = this.slides.length - 1;
    if (n > maxIndex) {
      n = 0;
    }
    if (n < 0) {
      n = maxIndex;
    }

    this.setState({ slideIndex: n });
  }

  componentDidMount() {
    this.slideshowInterval = setInterval(() => {
      this.plusDivs(1);
    }, 3000); // Change slides every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.slideshowInterval);
  }

  render() {
    // const currentSlide = this.slides[this.state.slideIndex];

    return (
      <div>
        <div className="w3-content w3-display-container">
          {this.slides.map((slide, index) => (
            <img
            alt='nothing'
              key={index}
              className="mySlides"
              src={slide}
              style={{
                width: '100%',
                display: index === this.state.slideIndex ? 'block' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Slideshow;