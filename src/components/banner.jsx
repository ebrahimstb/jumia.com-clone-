import '../styles/banner.css';
// import banner from "../assets/PickUp_BSB.gif"
const Banner = () => {
    return ( 
        <div className="banner">
            <div className='banner__div'>
                <a href="jumia.com">
                    <div className='banner__gif'>
                        {/* <img height={10px} width src={banner} alt="" /> */}
                    </div>
                </a>
            </div>
        </div>
     );
}
 
export default Banner;