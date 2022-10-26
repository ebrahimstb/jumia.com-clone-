import '../../styles/pages style/twentytwo.css';
import * as Icon from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { twentytwoslider } from "../sliders/twentytwoslider";

const TwentytwoPage = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='twentytwopage'>
            <section>
                <header className='twentytwopage__header'>
                    <div className='tphf1'>
                        <h2> Top Deals</h2>
                        <span>   | Home & Office</span>
                    </div>
                    <div className='tphf2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='twentytwopage__slider'>
                <Slider {...settings}className="twenty__slider">
                    {twentytwoslider.map((twtwslide)=>(
                         <div className="twentytwo__card" key={twtwslide.id}>
                         <a href="">
                         <div className="discount">{twtwslide.discount}</div>
                             <img src={twtwslide.img} alt={twtwslide.title} />
                             <div className='productname'>{twtwslide.title}</div>
                             <div className='productprice'>{twtwslide.oldprice}</div>
                             <div className='initialprice'>{twtwslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default TwentytwoPage;