// import { Dice1 } from 'react-bootstrap-icons';
import nokia from '../../assets/ororo (2).jpg'
import s22 from '../../assets/1(1).jpg'
import blender from '../../assets/phones-tablets_220x220.png'
import tshirt from '../../assets/phoonu (2).jpg'
import cliptoch from '../../assets/phoonu (1).jpg'
import watch from '../../assets/phoonu (3).jpg'
import tv from '../../assets/phoonu (4).jpg'
import c19 from '../../assets/phonu (1).jpg'
import fridge from '../../assets/phonu (2).jpg'
import lapi from '../../assets/phonu (3).jpg'


// var newPriceEl = document.querySelectorAll(".productprice");
// var initialPriceEl = document.querySelector(".finalprice");


export const thirteenslider =[
    {
        id: 1,
        title: 'Nokia 3.2 - 6.26" HD+ DISPLAY -16GBROM + 2GB RAM-13MP + 5MP-ANDROID 9 PIE -4000MAH-FACE UNLOCK-BLACK',
        oldprice: '₦' + 49990,
        newprice: '₦' + 37890,
        img: nokia,
    },
    {
        id: 2,
        title: '2022 New S22+ Ultra 7.3 Inch Android Smartphone 8GB+512GB',
        oldprice: '₦' + 290000,
        newprice: '₦' + 127081,
        img: s22
    },
    {
        id: 3,
        title: 'Feng Cheng 12 Cm Portable Stainless Heating Cup With Lid',
        oldprice: '₦' + 7900,
        newprice: '₦' + 3299,
        img: blender
    },
    {
        id: 4,
        title: "VEJARO T04 Women's Fashion Short Sleeve T Shirt-Black",
        oldprice: '₦' + 6500,
        newprice: '₦' + 1720,
        img: tshirt
    },
    {
        id: 5,
        title: 'Portable Tripod Selfie Stick Stand LED Light Bluetooth Remote Control Live/Selfie',
        oldprice: '₦' + 5400,
        newprice: '₦' + 4170,
        img: cliptoch
    },
    {
        id: 6,
        title: "Fngeen 05 Calendar Sporty Waterproof Quartz Men's Watch -Black",
        oldprice: '₦' + 28000,
        newprice: '₦' + 3970,
        img: watch
    },
    {
        id: 7,
        title: '2022 New S22+ Ultra 7.3 Inch Android Smartphone 8GB+512GB',
        oldprice: '₦' + 290000,
        newprice: '₦' + 127081,
        img: tv
    },
    {
        id: 8,
        title: '2022 New S22+ Ultra 7.3 Inch Android Smartphone 8GB+512GB',
        oldprice: '₦' + 150000,
        newprice: '₦' + 128990,
        img: c19
    },
    {
        id: 9,
        title: '2022 New S22+ Ultra 7.3 Inch Android Smartphone 8GB+512GB',
        oldprice: '₦' + 12294,
        newprice: '₦' + 8270,
        img: fridge
    },
    {
        id: 10,
        title: '2022 New S22+ Ultra 7.3 Inch Android Smartphone 8GB+512GB',
        oldprice: '₦' + 200000,
        newprice: '₦' + 174000,
        img: lapi,
        // dsc: discount(e, i)
    },
]
const discount = () =>{

    thirteenslider.forEach((e, i)=>{
          const newPrice = thirteenslider[i].newprice
         const initialPrice = thirteenslider[i].oldprice
        let dsc = parseFloat( Math.round((newPrice / initialPrice * 100) - 100))
         e.discount = dsc + "%"
      
     })
 }
 discount()