import '../../styles/pages style/forthpage.css';
import * as Icon from 'react-bootstrap-icons';

const Forthpage = () => {
    return ( 
        <div className="forthpage">
            <section className='main__forthpage'>
                <header className='flashsales'>
                    <div className='fs'>
                    <i><Icon.TagFill /></i>
                        <h2>Flash Sales</h2>
                    </div>
                    <div className='tl'>
                        <h2>Time left: </h2>
                        <span>02: 35: 11s</span>
                    </div>
                    <div className='sa'>
                        <h2>SEE ALL</h2>
                    </div>
                </header>
                <div></div>
            </section>
        </div>
     );
}
 
export default Forthpage;