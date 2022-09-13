import '../styles/navbar.css';
import * as Icon from 'react-bootstrap-icons';

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <section>
                <div className='jumia__logo'>JUMIA <span><Icon.StarFill /></span> </div>
                <form action="" className='search'>
                    <div className='search__fill'>
                        <i><Icon.Search /></i>
                        <input type="text" value="Search products, brands & categories"/>
                        </div>
                    <button>SEARCH</button>
                </form>
                <div className='signs'>
                    <ul className='main__sign'>
                        <li className='acc'> <i><Icon.Person /></i> Account</li>
                        <li className='hlp'> <i><Icon.QuestionCircle /></i> Help</li>
                        <li className='crt'> <i><Icon.Cart3 /></i> Cart</li>
                    </ul>
                </div>
            </section>
        </div>
     );
}
 
export default Navbar;