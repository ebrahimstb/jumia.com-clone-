import '../../styles/pages style/fourteenth.css';

import React, {Component } from "react";
import Slider from "react-slick";
import Newarrivals from "../../assets/new-arrivals_1168x384.jpg"
import Oraimoarrivals from "../../assets/oraimo_1168x384.jpg"
import Diageo from "../../assets/1168x384-LP.jpeg"
import Xiaomi from "../../assets/xiaomi_1168x384v3.jpg"
import Cocacola from "../../assets/coca-cola_1168x384.jpg"
import Defacto from "../../assets/defacto_1168x384.jpg"
import Uniliver from "../../assets/official-store-1168x384.jpg"



export default class OfficialStoreSlider extends Component{
    render(){
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          return (
            <>
              <Slider className='offst_slider'{...settings}>
                <div>
                  <img src={Newarrivals} />
                </div>
                <div>
                  <img src={Oraimoarrivals} />
                </div>
                <div>
                  <img src={Diageo} />
                </div>
                <div>
                  <img src={Xiaomi} />
                </div>
                <div>
                  <img src={Cocacola} />
                </div>
                <div>
                  <img src={Defacto} />
                </div>
                <div>
                  <img src={Uniliver} />
                </div>
              </Slider>
            </>
          );
    }
}