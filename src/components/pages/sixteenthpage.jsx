import '../../styles/pages style/sixteenthpage.css';
import * as Icon from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { sixteenthslider } from "../sliders/sixteenthslider";

const SixteenthPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='sixteenthpage'>
            <section>
                <header className='sixteenthpage__header'>
                    <div className='oraimo__os'>
                        <h2>Oraimo Official Store</h2>
                    </div>
                    <div className='oos'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='sixteenthpage__slider'>
                <Slider {...settings}className="sixteenth__slider">
                    {sixteenthslider.map((sixteenslide)=>(
                         <div className="sixteenth__card" key={sixteenslide.id}>
                         <a href="">
                         <div className="discount">{sixteenslide.discount}</div>
                             <img src={sixteenslide.img} alt={sixteenslide.title} />
                             <div className='productname'>{sixteenslide.title}</div>
                             <div className='productprice'>{sixteenslide.oldprice}</div>
                             <div className='initialprice'>{sixteenslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default SixteenthPage;