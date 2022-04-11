import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from "../Home/Card"
import  "./crousel.css"
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    
};

const data=[{
    "image":"https://www.easemytrip.com/images/offer-img/holi-in-india-hp.jpg",
    "paragraph":"from phoolon ki holi to lathmar holi, here are different ways to celebrate in india",
   "date":"March 26,2022"
},{
    "image":"https://www.easemytrip.com/images/offer-img/colorful-places-world-hp.jpg",
    "paragraph":"know about 12 of the most colorful places in the world",
   "date":"March 26,2022"

}
,{
    "image":"https://www.easemytrip.com/images/offer-img/helicopter-rides-india-hp.jpg",
    "paragraph":" Discover the most Worthy Helicopters rides in india for a true exploration",
   "date":"March 27,2022"

},{
    "image":"https://www.easemytrip.com/images/offer-img/best-countries-europe-hp.jpg",
    "paragraph":" know about 12 of the most colorful places in the world",
   "date":"March 27,2022"

},]


const items = [
    <div className="item" data-value="1"><Card data={data[0]}/></div>,
    <div className="item" data-value="2"><Card  data={data[1]}/></div>,
    <div className="item" data-value="3"><Card  data={data[2]}/></div>,
    <div className="item" data-value="4"><Card  data={data[3]}/></div>,
    <div className="item" data-value="5"><Card  data={data[1]}/></div>,
    <div className="item" data-value="6"><Card  data={data[2]}/></div>,
    <div className="item" data-value="7"><Card data={data[3]}/></div>,
    <div className="item" data-value="8"><Card data={data[0]}/></div>,
    <div className="item" data-value="9"><Card data={data[1]}/></div>,
    <div className="item" data-value="10"><Card data={data[2]}/></div>,
    <div className="item" data-value="11"><Card data={data[3]}/></div>,
    <div className="item" data-value="12"><Card data={data[0]}/></div>,
    <div className="item" data-value="12"><Card data={data[1]}/></div>,
    <div className="item" data-value="12"><Card data={data[2]}/></div>,
    <div className="item" data-value="12"><Card data={data[3]}/></div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);
export default Carousel