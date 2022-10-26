import '../../styles/pages style/secondpage.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { secondslide } from "../sliders/secondslide";
const SecondPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 10,
        autoPlay:true
      };


    return ( 
        <div className="secondpage">
                <section id='secondpage'>
                <Slider {...settings} className="slider">
            {secondslide.map((sslide)=>(
                    <div className='card' key={sslide.id}>
                        <a href="">
                        <div className='sslide__pic'>
                            <img src={sslide.img} alt={sslide.title}/>
                        </div>
                        <span>{sslide.title}</span>
                        </a>
                    </div>
            ))}
                </Slider>
                </section>

        </div>
     );
}
 
export default SecondPage;