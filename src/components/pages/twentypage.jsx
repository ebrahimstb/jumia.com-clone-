import '../../styles/pages style/twentypage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { twentyslider } from "../sliders/twentyslider";
import * as Icon from 'react-bootstrap-icons';

const TwentyPage = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='twentypage'>
            <section>
                <header className='twentypage__header'>
                    <div className='tp1'>
                        <h2> Top Deals</h2>
                        <span>   | Health & Beauty</span>
                    </div>
                    <div className='tp2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='twentypage__slider'>
                <Slider {...settings}className="twenty__slider">
                    {twentyslider.map((svntslide)=>(
                         <div className="twenty__card" key={svntslide.id}>
                         <a href="">
                         <div className="discount">{svntslide.discount}</div>
                             <img src={svntslide.img} alt={svntslide.title} />
                             <div className='productname'>{svntslide.title}</div>
                             <div className='productprice'>{svntslide.oldprice}</div>
                             <div className='initialprice'>{svntslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default TwentyPage;