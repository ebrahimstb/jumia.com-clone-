import '../styles/home.css';
import EightPage from './pages/eightpage';
import EleventhPage from './pages/eleventhpage';
import FifthPage from './pages/fifthpage';
import Firstpage from './pages/firstpage';
import Forthpage from './pages/forthpage';
import NinthPage from './pages/ninthpage';
import SecondPage from './pages/secoundpage';
import SeventhPage from './pages/seventhpage';
import SixthPage from './pages/sixthpage';
import TenthPage from './pages/tenthpage';
import Thirdpage from './pages/thirdpage';
import ThirteenPage from './pages/thirteenpage';
import TwelevthPage from './pages/twelvthpage';

const Contents = () => {
    return ( 
        <div className="content">
            <section className='content__sec'>
                < Firstpage />
                <SecondPage />
                <Thirdpage />
                <Forthpage />
                <FifthPage />
                <SixthPage />
                <SeventhPage />
                <EightPage />
                <NinthPage />
                <TenthPage />
                <EleventhPage />
                <TwelevthPage />
                <ThirteenPage />
            </section>
        </div>
     );
}
 
export default Contents;