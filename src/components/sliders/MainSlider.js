import '../../styles/pages style/firstpage.css';
import React, { Component } from "react";
import Slider from "react-slick";
import baseUrl from "../../assets/TH_S-LIVE.gif";
import brandDay from "../../assets/Slider.jpg";
import flashSales from "../../assets/slider_FS-(1).jpg";
import sept12 from "../../assets/SX__712x384_copy_7.png";
import infinix from "../../assets/Infinix-Sliders.png";
import coldStone from "../../assets/712_x_384_.jpg";
import superMarket from "../../assets/SUPERMARKET_SX__712x384_copy_4.png";
import airtime from "../../assets/Airtime_MallDesktop.jpg";



export default class MainSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={baseUrl} />
          </div>
          <div>
            <img src={brandDay} />
          </div>
          <div>
            <img src={flashSales} />
          </div>
          <div>
            <img src={sept12} />
          </div>
          <div>
            <img src={infinix} />
          </div>
          <div>
            <img src={coldStone} />
          </div>
          <div>
            <img src={superMarket} />
          </div>
          <div>
            <img src={airtime} />
          </div>
        </Slider>
      </div>
    );
  }
}