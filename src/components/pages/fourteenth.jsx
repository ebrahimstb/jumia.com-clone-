import '../../styles/pages style/fourteenth.css';
import OfficialStoreSlider from '../sliders/OfficialStoreSlider';

const FourteenthPage = () => {
    return ( 
        <div className="fourteenthpage">
            <section className='main__fourteenthpage'>
                <div className='offst'>Official Store</div>
                <a href="jumia.com">
                <div className='offst_content'>
                        <OfficialStoreSlider/>
                </div>
                </a>
            </section>
        </div>
     );
}
 
export default FourteenthPage;