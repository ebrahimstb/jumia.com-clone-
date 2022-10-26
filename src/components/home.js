import '../styles/home.css';
import Arrowup from './arrowup';

import EighteenPage from './pages/eighteenpage';
import EightPage from './pages/eightpage';
import EleventhPage from './pages/eleventhpage';
import FifteenthPage from './pages/fifteenpage';
import FifthPage from './pages/fifthpage';
import Firstpage from './pages/firstpage';
import Forthpage from './pages/forthpage';
import FourteenthPage from './pages/fourteenth';
import NineteenPage from './pages/nineteenpage';
import NinthPage from './pages/ninthpage';
import SecondPage from './pages/secoundpage';
import SeventeenPage from './pages/seventeenpage';
import SeventhPage from './pages/seventhpage';
import SixteenthPage from './pages/sixteenthpage';
import SixthPage from './pages/sixthpage';
import TenthPage from './pages/tenthpage';
import Textpage from './pages/textpage';
import Thirdpage from './pages/thirdpage';
import ThirteenPage from './pages/thirteenpage';
import TwelevthPage from './pages/twelvthpage';
import TwentyfivePage from './pages/twentyfive';
import TwentyfourPage from './pages/twentyfour';
import TwentyonePage from './pages/twentyone';
import TwentyPage from './pages/twentypage';
import TwentysevenPage from './pages/twentyseven';
import TwentysixPage from './pages/twentysix';
import TwentythreePage from './pages/twentythree';
import TwentytwoPage from './pages/twentytwo';

const Contents = () => {
    return ( 
        <div className="content">
            <section className='content__sec'>
                < Firstpage />
                <SecondPage />
      < Arrowup />

                <Thirdpage />
                <Forthpage />
                <FifthPage 
                countdownTimestampMs ={1700478060000}/>
                <SixthPage />
                <SeventhPage />
                <EightPage />
                <NinthPage />
                <TenthPage />
                <EleventhPage />
                <TwelevthPage />
                <ThirteenPage />
                <FourteenthPage />
                <SixteenthPage />
                <FifteenthPage />
                <SeventeenPage />
                <EighteenPage />
                < NineteenPage />
                <TwentyPage />
                <TwentyonePage />
                <TwentytwoPage />
                <TwentythreePage />
                <TwentyfourPage />
                <TwentyfivePage />
                <TwentysixPage />
                <TwentysevenPage />
                <Textpage />
            </section>
        </div>
     );
}
 
export default Contents;