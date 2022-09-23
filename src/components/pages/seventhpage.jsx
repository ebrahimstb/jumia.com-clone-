import '../../styles/pages style/seventhpage.css';
import * as Icon from 'react-bootstrap-icons';

const SeventhPage = () => {
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
            </section>
        </div>
     );
}
 
export default SeventhPage;