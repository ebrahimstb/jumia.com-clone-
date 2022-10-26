import '../../styles/pages style/forthpage.css';
import * as Icon from 'react-bootstrap-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { forthslider } from "../sliders/forthpageslider";
import { useState, useEffect, useRef } from "react";

// import { getRemainingTimeUntilMs } from "../countdowntimer/countdownTimer";

// const defaltRemainingTime = {
//     seconds: "22",
//     minutes: "33",
//     hours: "44",
//     days: "00"
// }

const Forthpage = () => {

    // const [remainingTime, setRemainingTime] = useState(defaltRemainingTime)

    // useEffect(() =>{
    //     const intervalId = setInterval(() => {
    //         upateRemainingTime(countdownTimestampMs)
    //     }, 1000);
    //     return () => clearInterval(intervalId)
    // }, [countdownTimestampMs])

    // function upateRemainingTime(countdown) {
    //    setRemainingTime(getRemainingTimeUntilMs(countdown)) 
    // }
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () =>{
        const countdownDate = new Date('Nov 20 2022').getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const gapInTime = countdownDate - now;

            const days = Math.floor((gapInTime / (1000 * 60 * 60 * 24)));
            const hours = Math.floor((gapInTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 )));
            const minutes = Math.floor((gapInTime % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((gapInTime % (1000 * 60) / (1000 )));
            
            if (gapInTime < 0) {
                clearInterval(interval.current)
            } else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        },1000)
    };
        useEffect(()=>{
            startTimer();
            return () =>{
                clearInterval(interval.current)
            };
        })

            //slider settings
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 8,
                autoPlay:true
              };

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
                        <span className='days'>{timerDays}d:</span>
                        <span className='hour'>{timerHours}h:</span>
                        <span className='minutes'>{timerMinutes}m:</span>
                        <span className='seconds'>{timerSeconds}s</span>
                    </div>
                    <div className='sa'>
                        <h2>SEE ALL</h2>
                    </div>
                </header>
                <div className='forthpage__slider'>
                <Slider {...settings}className="forth__slider">
                    {forthslider.map((frtslide)=>(
                         <div className="forth__card" key={frtslide.id}>
                         <a href="">
                         <div className="discount">{frtslide.discount}</div>
                             <img src={frtslide.img} alt={frtslide.title} />
                             <div className='productname'>{frtslide.title}</div>
                             <div className='productprice'>{frtslide.oldprice}</div>
                             <div className='initialprice'>{frtslide.newprice}</div>
                         </a>
                     </div>
                    ))}
                   </Slider>
                </div>
            </section>
        </div>
     );
}
 
export default Forthpage;