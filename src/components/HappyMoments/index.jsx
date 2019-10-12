import React, { PureComponent } from "react"
import Slider from "react-slick"
import Img from 'gatsby-image';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "./happymoment.css";

export default class HappyMoment extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      className: 'center',
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 8500,
      dots: false,
      lazyLoad: true,
      arrows:false,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const {data} = this.props;
    return (
      <Slider {...settings} className="">
        {data.map((item, index) => (
          <div className="img-wrapper">
            <Img className="img-fluid" fluid={item.node.childImageSharp.fluid} />
          </div>
        ))}
      </Slider>
    );
  }
}


