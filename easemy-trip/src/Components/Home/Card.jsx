import React from "react";
import style from "./card.module.css";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Card = ({data}) => {
  return (
    <div className={style.container}>
      
      <div className={style.crousel}>
        
      <div className={style.card}>
        <img src={data.image} alt="images" className={style.img} />
        <p>
        {data.paragraph}
        </p>
        <div className={style.date}>
          {" "}
          <CalendarMonthIcon className={style.icon} />{" "}
          <span>{data.date}</span>{" "}
        </div>
      </div>

      {/* <div className={style.card}>
        <img src="https://www.easemytrip.com/images/offer-img/holi-in-india-hp.jpg" alt="images" className={style.img} />
        <p>
        from phoolon ki holi to lathmar holi, here are different ways to
          celebrate in india
        </p>

        <div className={style.date}>
          {" "}
          <CalendarMonthIcon className={style.icon} />{" "}
          <span>March 16,2022</span>{" "}
        </div>
      </div>
      <div className={style.card}>
        <img src="https://www.easemytrip.com/images/offer-img/colorful-places-world-hp.jpg" alt="images" className={style.img} />
        <p>
        know about 12 of the most colorful places in the world
        
        </p>
        <div className={style.date}>
          {" "}
          <CalendarMonthIcon className={style.icon} />{" "}
          <span>March 15,2022</span>{" "}
        </div>
      </div> */}
      {/* <div className={style.card}>
        <img src="https://www.easemytrip.com/images/offer-img/helicopter-rides-india-hp.jpg" alt="images" className={style.img} />
        <p>  Discover the most Worthy Helicopters rides in india for a true
          exploration </p>
        <div className={style.date}>
          {" "}
          <CalendarMonthIcon className={style.icon} />{" "}
          <span>March 16,2022</span>{" "}
        </div>
      </div>  */}

      {/* <div className={style.card}>
        <img src="https://www.easemytrip.com/images/offer-img/best-countries-europe-hp.jpg" alt="images" className={style.img} />
        <p>know about 12 of the most colorful places in the world</p>
        <div className={style.date}>
          {" "}
          <CalendarMonthIcon className={style.icon} />{" "}
          <span>March 15,2022</span>{" "}
        </div>
      </div>
      <div className={style.card}>
        <img src="https://www.easemytrip.com/images/offer-img/holi-in-india-hp.jpg" alt="images" className={style.img} />
        <p>
          Discover the most Worthy Helicopters rides in india for a true
          exploration
        </p>

        <div className={style.date}>
          {" "}
          <CalendarMonthIcon className={style.icon} />{" "}
          <span>March 16,2022</span>{" "}
        </div>
      </div>
      <div className={style.card}>
        <img src="https://www.easemytrip.com/images/offer-img/colorful-places-world-hp.jpg" alt="images" className={style.img} />
        <p>
          from phoolon ki holi to lathmar holi, here are different ways to
          celebrate in india
        </p>
        <div className={style.date}>
          {" "}
          <CalendarMonthIcon className={style.icon} />{" "}
          <span>March 15,2022</span>{" "}
        </div>
      </div>
      <div className={style.card}>
        <img src="https://www.easemytrip.com/images/offer-img/helicopter-rides-india-hp.jpg" alt="images" className={style.img} />
        <p>Discover the best and the most Beautiful Countries of Europe </p>
        <div className={style.date}>
          {" "}
          <CalendarMonthIcon className={style.icon} />{" "}
          <span>March 16,2022</span>{" "}
        </div>
      </div>
       */}

      </div>

    </div>
  );
};

export default Card;
/*  */