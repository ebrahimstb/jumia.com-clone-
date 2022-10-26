// import { Dice1 } from 'react-bootstrap-icons';
import boxyman from '../../assets/1 (15).jpg'
import bo6 from '../../assets/1 (16).jpg'
import blender from '../../assets/1 (17).jpg'
import tshirt from '../../assets/1 (18).jpg'
import cliptoch from '../../assets/2.jpg'
import watch from '../../assets/1 (19).jpg'
import tv from '../../assets/1 (20).jpg'
import c19 from '../../assets/1 (21).jpg'
import fridge from '../../assets/1 (22).jpg'
import lapi from '../../assets/1 (23).jpg'
import shoe from '../../assets/1 (24).jpg'
import crossbag from '../../assets/1 (25).jpg'
import boot from '../../assets/1 (26).jpg'


// var newPriceEl = document.querySelectorAll(".productprice");
// var initialPriceEl = document.querySelector(".finalprice");


export const twentysixslider =[
    {
        id: 1,
        title: 'Defacto Man Boxy Fit Crew Neck Short Sleeve Knitted T-Shirt - Black',
        oldprice: '₦' + 3061,
        newprice: '₦' + 6021,
        img: boxyman,
    },
    {
        id: 2,
        title: 'EILIFINTE B06 Casual Crossbody Bag-Grey',
        oldprice: '₦' + 290000,
        newprice: '₦' + 127081,
        img: bo6
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
        title: 'Classic Ladies Anti Blue Cat Eye Glasses',
        oldprice: '₦' + 290000,
        newprice: '₦' + 127081,
        img: tv
    },
    {
        id: 8,
        title: 'Couple Necklace Heart Studded Pendant, 2 In 1,  Silver & Gold',
        oldprice: '₦' + 150000,
        newprice: '₦' + 128990,
        img: c19
    },
    {
        id: 9,
        title: 'Mens Oblique Zippers Hoodie Jacket Sweatshirts - BLACK',
        oldprice: '₦' + 12294,
        newprice: '₦' + 8270,
        img: fridge
    },
    {
        id: 10,
        title: "VEJARO T09  Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set-Black",
        oldprice: '₦' + 200000,
        newprice: '₦' + 174000,
        img: lapi
    },
    {
        id: 11,
        title: 'Mens Lace Up Sneakers',
        oldprice: '₦' + 200000,
        newprice: '₦' + 174000,
        img: shoe
    },    {
        id: 12,
        title: "MeiJieLuo Men's Casual Crossbody Bag With USB Port",
        oldprice: '₦' + 200000,
        newprice: '₦' + 174000,
        img: crossbag
    },    {
        id: 13,
        title: 'Mens Lace Up boot',
        oldprice: '₦' + 15000,
        newprice: '₦' + 17400,
        img: boot,
    },
]
const discount = () =>{

    twentysixslider.forEach((e, i)=>{
          const newPrice = twentysixslider[i].newprice
         const initialPrice = twentysixslider[i].oldprice
        let dsc = parseFloat( Math.round((newPrice / initialPrice * 100) - 100))
         e.discount = dsc + "%"
      
     })
 }
let number =  discount()

