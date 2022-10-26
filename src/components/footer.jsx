import '../styles/footer.css';
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
    return ( 
        <footer>
            <section>
            <div id='footer1'>
                <div className='footer1'>
                <div className='jumiafooter__logo'>
                    JUMIA <span><Icon.StarFill /></span> 
                </div>
                <div className='footerform'>
                    <div className='ffup'>
                        <div>NEW TO JUMIA?</div>
                        <span>Subscribe to our newsletter to get updates on our latest offers!</span>
                    </div>
                    <form action="">
                        <div id='fmail'>
                            <div className='fmail'><i><Icon.EnvelopeFill/></i><input type="text" placeholder='Enter E-Mail Address' /></div>
                            <div className='fmailbtn'>
                                <button>MALE</button>
                                <button>FEMALE</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='footerapps'>
                    <div className='writeups'>
                        <div className='jumiastar'></div>
                        <div className='faw'>
                            <div>DOWNLOAD JUMIS FREE APP</div>
                            <span>Get access to exclusive offers!</span>
                        </div>
                    </div>
                    <div className='footer__playstore'>
                        <a href="" id='fpgd'><div className='footer__google'></div></a>
                        <a href="" id='fpad'><div className='footer__apple'></div></a>
                    </div>
                </div>
                </div>
            </div>
            <div id='footer2'>
                <div className='footer2'>
                    <div className='luhy'>
                        <span>LET US HELP YOU</span>
                        <ul>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">How to shop on jumia?</a></li>
                            <li><a href="">Delivery option and timelines</a></li>
                            <li><a href="">How to return a product on jumia?</a></li>
                            <li><a href="">Corporate and bulk purchase</a></li>
                            <li><a href="">Report a product</a></li>
                            <li><a href="">Ship your package anywhere in nigeria</a></li>
                            <li><a href="">Dispute resolution policy</a></li>
                        </ul>
                    </div>
                    <div className='aj'>
                        <span>ABOUT JUMIA</span>
                        <ul>
                            <li><a href="">About us</a></li>
                            <li><a href="">Jumia careers</a></li>
                            <li><a href="">Jumia express</a></li>
                            <li><a href="">Terms and condition</a></li>
                            <li><a href="">Privacy and cookie notice</a></li>
                            <li><a href="">Jumia prime</a></li>
                            <li><a href="">Jumia global</a></li>
                            <li><a href="">Flash Sales</a></li>
                            <li><a href="">Brand Festival 2022</a></li>
                        </ul>
                    </div>
                    <div className='mmwj'>
                    <span>MAKE MONEY WITH JUMIA</span>
                        <ul>
                            <li><a href="">Sell on jumia</a></li>
                            <li><a href="">Become a sale consultant</a></li>
                            <li><a href="">Become a jumia vendor service provider</a></li>
                            <li><a href="">Become a logistics service partner</a></li>
                            <li><a href="">Join the Jumia DA Academy</a></li>
                            <li><a href="">Join the jumia KOL program</a></li>
                        </ul>
                    </div>
                    <div className='jintl'>
                    <span>JUMIA INTERNATIONAL</span>
                    <div className='jul'>
                        <ul>
                            <li><a href="">Algeria</a></li>
                            <li><a href="">Egypt</a></li>
                            <li><a href="">Ghana</a></li>
                            <li><a href="">Ivory Coast</a></li>
                            <li><a href="">Kenya</a></li>
                            <li><a href="">Morocco</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Senegal</a></li>
                            <li><a href="">Tunissia</a></li>
                            <li><a href="">south africa</a></li>
                            <li><a href="">Uganda</a></li>
                            <li><a href="">Zando</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            <div id='footer3'>
                <div className='footer3'></div>
            </div>
            </section>

        </footer>
     );
}
 
export default Footer;