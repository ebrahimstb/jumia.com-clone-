import '../../styles/pages style/thirteenpage.css';
import * as Icon from 'react-bootstrap-icons';

const ThirteenPage = () => {
    return ( 
        <div className='thirteenpage'>
            <section>
                <header className='thirteenpage__header'>
                    <div className='sh1'>
                        <h2>Top Deals</h2>
                        <span>   | Phones & Tablet</span>
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
 
export default ThirteenPage;