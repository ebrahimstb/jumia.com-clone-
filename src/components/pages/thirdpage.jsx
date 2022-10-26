import '../../styles/pages style/thirdpage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { thirdslider } from "../sliders/thirdslider";



const Thirdpage = () => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 8,
        autoPlay:true
      };

    return ( 
        <div className="thirdpage">
            <section className='main__thirdpage'>
                <header className='topselling'>
                    <h2>Top selling items</h2>
                </header>
                <div className='thirdpage__slider'>
                <Slider {...settings}className="third__slider">
                    {thirdslider.map((trdslide)=>(
                         <div className="third__card" key={trdslide.id}>
                         <a href="">
                         <div className="discount">{trdslide.discount}</div>
                             <img src={trdslide.img} alt={trdslide.title} />
                             <div className='productname'>{trdslide.title}</div>
                             <div className='productprice'>{trdslide.oldprice}</div>
                             <div className='initialprice'>{trdslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default Thirdpage;