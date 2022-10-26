import '../../styles/pages style/eleventhpage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { eleventhslider } from "../sliders/eleventhslider";
import * as Icon from 'react-bootstrap-icons';

const EleventhPage = () => {
        
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='eleventhpage'>
            <section>
                <header className='eleventhpage__header'>
                    <div className='td1'>
                        <h2>Daily jumia Hot 10</h2>
                    </div>
                    <div className='td2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='eleventhpage__slider'>
                <Slider {...settings}className="eleventh__slider">
                    {eleventhslider.map((elevslide)=>(
                         <div className="eleventh__card" key={elevslide.id}>
                         <a href="">
                         <div className="discount">{elevslide.discount}</div>
                             <img src={elevslide.img} alt={elevslide.title} />
                             <div className='productname'>{elevslide.title}</div>
                             <div className='productprice'>{elevslide.oldprice}</div>
                             <div className='initialprice'>{elevslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default EleventhPage;