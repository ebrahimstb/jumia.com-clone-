import '../../styles/pages style/twentyseven.css';
import * as Icon from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { twentysevenslider } from "../sliders/twentysevenslider";

const TwentysevenPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className='twentysevenpage'>
            <section>
                <header className='twentysevenpage__header'>
                    <div className='td__com1'>
                        <h2> Top Deals</h2>
                        <span>   | Computing</span>
                    </div>
                    <div className='td__com2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
                <div className='twentysevenpage__slider'>
                <Slider {...settings}className="twentseven__slider">
                    {twentysevenslider.map((tsvntslide)=>(
                         <div className="twentyseven__card" key={tsvntslide.id}>
                         <a href="">
                         <div className="discount">{tsvntslide.discount}</div>
                             <img src={tsvntslide.img} alt={tsvntslide.title} />
                             <div className='productname'>{tsvntslide.title}</div>
                             <div className='productprice'>{tsvntslide.oldprice}</div>
                             <div className='initialprice'>{tsvntslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default TwentysevenPage;