import '../../styles/pages style/seventhpage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import * as Icon from 'react-bootstrap-icons';
import { seventhslider } from "../sliders/seventhslider";


const SeventhPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };


    return ( 
        <div className='seventhpage'>
            <section>
                <header className='seventhpage__header'>
                    <div className='sh1'>
                        <h2>Brand Festival Top Deals</h2>
                        <span>   | Enjoy Free Delivery Now</span>
                    </div>
                    <div className='sh2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='seventhpage__slider'>
                <Slider {...settings}className="seventh__slider">
                    {seventhslider.map((svntslide)=>(
                         <div className="seventh__card" key={svntslide.id}>
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
 
export default SeventhPage;