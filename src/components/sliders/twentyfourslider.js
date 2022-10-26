// import { Dice1 } from 'react-bootstrap-icons';
import nivia from '../../assets/orijin (1).jpg'
import bottlewater from '../../assets/1 (1).jpg'
import bud from '../../assets/orijin (4).jpg'
import knor from '../../assets/1 (19).jpg'
import gmorn from '../../assets/1 (25).jpg'
import stove from '../../assets/1 (5).jpg'
import defactoshirt from '../../assets/1 (6).jpg'
import womenshirt from '../../assets/1 (7).jpg'
import sprite from '../../assets/1 (8).jpg'
import jameson from '../../assets/1 (9).jpg'


// var newPriceEl = document.querySelectorAll(".productprice");
// var initialPriceEl = document.querySelector(".finalprice");


export const twentyfourslider =[
    {
        id: 1,
        title: 'NIVEA Perfect & Radiant Luminous630 Anti Dark Marks Serum 30ml & Anti Dark Marks Day Cream SPF50 (bundle Pack)',
        oldprice: '₦' + 12250,
        img: nivia,
    },
    {
        id: 2,
        title: 'Eva Water 150cl x12',
        oldprice: '₦' + 1600,
        img: bottlewater
    },
    {
        id: 3,
        title: 'Feng Cheng 12 Cm Portable Stainless Heating Cup With Lid',
        oldprice: '₦' + 24000,
        newprice: '₦' + 27300,
        img: bud
    },
    {
        id: 4,
        title: "Knorr Chicken Seasoning Cubes Taste The Knorr Difference 50x8g",
        oldprice: '₦' + 6500,
        newprice: '₦' + 1720,
        img: knor
    },
    {
        id: 5,
        title: 'Nestle Golden Morn - 45g X 10 X 9(Carton)',
        oldprice: '₦' + 9000,
        img: gmorn
    },
    {
        id: 6,
        title: "Binatone Table Top Glass Finish Gas Cooker GGC-002",
        oldprice: '₦' + 38995,
        newprice: '₦' + 47000,
        img: stove
    },
    {
        id: 7,
        title: 'Defacto Man OVERSIZE FIT Knitted T-Shirt-Orange',
        oldprice: '₦' + 2915,
        newprice: '₦' + 5015,
        img: defactoshirt
    },
    {
        id: 8,
        title: 'Defacto Woman REGULAR FIT Swimwear Woven Swimming Short-Black',
        oldprice: '₦' + 3012,
        newprice: '₦' + 7000,
        img: womenshirt
    },
    {
        id: 9,
        title: 'Sprite Can 33cl x24',
        oldprice: '₦' + 3800,
        img: sprite
    },
    {
        id: 10,
        title: '2022 New S22+ Ultra 7.3 Inch Android Smartphone 8GB+512GB',
        oldprice: '₦' + 82012,
        newprice: '₦' + 9900,
        img: jameson
    },
]
const discount = () =>{

    twentyfourslider.forEach((e, i)=>{
          const newPrice = twentyfourslider[i].newprice
         const initialPrice = twentyfourslider[i].oldprice
        let dsc = parseFloat( Math.round((newPrice / initialPrice * 100) - 100))
         e.discount = dsc + "%"
      
     })
 }
 discount()