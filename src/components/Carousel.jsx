import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { default as recycle, default as reduce } from "../assets/pictAgus/reduce.png";
import reuse from "../assets/pictAgus/reduse.png";
import clean from "../assets/pictAgus/reuse.png";
import wise from "../assets/pictAgus/wisee.png";

export default class Crsl extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div
        className="mt-5 "
        style={{
          margin: "0 10px",
        }}
      >
        <h2 className="text-center">Baca Jurnal</h2>
        <Slider {...settings}>
          <div>
            <img src={clean} className="card-img-top mt-4" alt="..." style={{ width: "12rem" }} />
          </div>
          <div>
            <img src={reduce} className="card-img-top mt-4" alt="..." style={{ width: "12rem" }} />
          </div>
          <div>
            <img src={recycle} className="card-img-top mt-4" alt="..." style={{ width: "12rem" }} />
          </div>
          <div>
            <img src={wise} className="card-img-top mt-4" alt="..." style={{ width: "12rem" }} />
          </div>
          <div>
            <img src={clean} className="card-img-top mt-4" alt="..." style={{ width: "12rem" }} />
          </div>
          <div>
            <img src={reuse} className="card-img-top mt-4" alt="..." style={{ width: "12rem" }} />
          </div>
        </Slider>
      </div>
    );
  }
}
