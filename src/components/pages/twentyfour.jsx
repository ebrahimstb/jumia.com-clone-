import '../../styles/pages style/twentyfour.css';
import * as Icon from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { twentyfourslider } from "../sliders/twentyfourslider";

const TwentyfourPage = () => {
        
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='twentyfourpage'>
            <section>
                <header className='twentyfourpage__header'>
                    <div className='top__half1'>
                        <h2> Top Deals</h2>
                        <span>   | Half Price Store</span>
                    </div>
                    <div className='top__half2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='twentyfourpage__slider'>
                <Slider {...settings}className="twentyfour__slider">
                    {twentyfourslider.map((twtfslide)=>(
                         <div className="twentyfour__card" key={twtfslide.id}>
                         <a href="">
                         <div className="discount">{twtfslide.discount}</div>
                             <img src={twtfslide.img} alt={twtfslide.title} />
                             <div className='productname'>{twtfslide.title}</div>
                             <div className='productprice'>{twtfslide.oldprice}</div>
                             <div className='initialprice'>{twtfslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default TwentyfourPage;