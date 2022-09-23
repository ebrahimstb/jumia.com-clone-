import '../../styles/pages style/firstpage.css';
import MainSlider from '../sliders/MainSlider';
import * as Icon from 'react-bootstrap-icons';

const Firstpage = () => {
    return ( 
        <div className="firstpage">
            <div className='firstpage__sections'>
                <ul>
                    <li>
                        <i><Icon.Apple /></i>
                        <a href="">Supermarket</a>
                        </li>
                    <li>
                    <i><Icon.CashCoin /></i>
                        <a href="">Health & beauty</a>
                        </li>
                    <li>
                    <i><Icon.HouseDoor /></i>
                        <a href="">Home & office</a>
                        </li>
                    <li>
                    <i><Icon.Phone /></i>
                        <a href="">Phone & tablet</a>
                        </li>
                    <li>
                    <i><Icon.PcDisplayHorizontal /></i>
                        <a href="">Computing</a>
                        </li>
                    <li>
                    <i><Icon.Display /></i>
                        <a href="">Electronics</a>
                        </li>
                    <li>
                    <i><Icon.Wallet2 /></i>
                        <a href="">Fashion</a>
                        </li>
                    <li>
                    <i><Icon.Diagram2Fill /></i>
                        <a href="">Baby product</a>
                        </li>
                    <li>
                    <i><Icon.Controller /></i>
                        <a href="">Gaming</a>
                        </li>
                    <li>
                    <i><Icon.Water /></i>
                        <a href="">Sportings goods</a>
                        </li>
                    <li>
                    <i><Icon.Truck /></i>
                        <a href="">Automobile</a>
                        </li>
                    <li>
                    <i><Icon.ThreeDots /></i>
                        <a href="">Other categories</a>
                        </li>
                </ul>
            </div>
            <div className='firstpage__sections'>
                <MainSlider />
            </div>
            <div className='firstpage__sections'></div>
            <div className='firstpage__sections'></div>
        </div>
     );
}
 
export default Firstpage;