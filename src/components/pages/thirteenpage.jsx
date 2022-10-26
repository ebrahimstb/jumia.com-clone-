import '../../styles/pages style/thirteenpage.css';
import * as Icon from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { thirteenslider } from "../sliders/thirteen";

const ThirteenPage = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='thirteenpage'>
            <section>
                <header className='thirteenpage__header'>
                    <div className='sh1'>
                        <h2>Top Deals</h2>
                        <span>   | Phones & Tablet</span>
                    </div>
                    <div className='sh2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='thirteenpage__slider'>
                <Slider {...settings}className="thirteen__slider">
                    {thirteenslider.map((trtslide)=>(
                         <div className="thirteen__card" key={trtslide.id}>
                         <a href="">
                         <div className="discount">{trtslide.discount}</div>
                             <img src={trtslide.img} alt={trtslide.title} />
                             <div className='productname'>{trtslide.title}</div>
                             <div className='productprice'>{trtslide.oldprice}</div>
                             <div className='initialprice'>{trtslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default ThirteenPage;