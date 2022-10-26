import '../../styles/pages style/fifteenpage.css';
import * as Icon from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { fifteenthslider } from "../sliders/fifteenth";

const FifteenthPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='fifteenthpage'>
            <section>
                <header className='fifteenthpage__header'>
                    <div className='adidas__os'>
                        <h2>Adidas Official Store</h2>
                    </div>
                    <div className='aos'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='fifteenthpage__slider'>
                <Slider {...settings}className="fifteenth__slider">
                    {fifteenthslider.map((fiftnslide)=>(
                         <div className="fifteenth__card" key={fiftnslide.id}>
                         <a href="">
                         <div className="discount">{fiftnslide.discount}</div>
                             <img src={fiftnslide.img} alt={fiftnslide.title} />
                             <div className='productname'>{fiftnslide.title}</div>
                             <div className='productprice'>{fiftnslide.oldprice}</div>
                             <div className='initialprice'>{fiftnslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default FifteenthPage;