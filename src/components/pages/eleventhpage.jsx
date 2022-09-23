import '../../styles/pages style/eleventhpage.css';
import * as Icon from 'react-bootstrap-icons';

const EleventhPage = () => {
    return ( 
        <div className='eleventhpage'>
            <section>
                <header className='eleventhpage__header'>
                    <div className='td1'>
                        <h2>Daily jumia Hot 10</h2>
                    </div>
                    <div className='td2'>
                        <a href="">SEE ALL</a>
                        <i><Icon.ChevronRight /></i>
                    </div>
                </header>
            </section>
        </div>
     );
}
 
export default EleventhPage;