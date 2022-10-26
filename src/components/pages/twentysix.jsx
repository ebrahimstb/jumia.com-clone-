import '../../styles/pages style/twentysix.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { twentysixslider } from "../sliders/26";
import * as Icon from 'react-bootstrap-icons';

const TwentysixPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='twentysixpage'>
            <section>
                <header className='twentysixpage__header'>
                    <div className='td__fsh1'>
                        <h2> Top Deals</h2>
                        <span>   | Fashion</span>
                    </div>
                    <div className='td__fsh2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='twentysixpage__slider'>
                <Slider {...settings}className="twentysix__slider">
                    {twentysixslider.map((twxslide)=>(
                         <div className="twentysix__card" key={twxslide.id}>
                         <a href="">
                         <div className="discount">{twxslide.discount}</div>
                             <img src={twxslide.img} alt={twxslide.title} />
                             <div className='productname'>{twxslide.title}</div>
                             <div className='productprice'>{twxslide.oldprice}</div>
                             <div className='initialprice'>{twxslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default TwentysixPage;