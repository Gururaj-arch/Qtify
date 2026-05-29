// import React, { useEffect } from "react";
// import styles from "./Carousal.module.css";
// //@ts-ignore
// import Swiper from "swiper";
// import { useSwiper,SwiperSlide  } from 'swiper/react';
// import "swiper/css";
// import  CarousalLeftNavigation  from "./CarousalLeftNavigation/CarousalLeftNavigation";
// import  CarousalRightNavigation  from "./CarousalRightNavigation/CarousalRightNavigation";
 import { Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import styles from './Carousal.module.css';
import { useEffect } from 'react';

import 'swiper/css'
// import { CarousalLeftNavigation } from './CarousalLeftNavigation/CarousalLeftNavigation';
// import { CarousalRightNavigation } from './CarousalRightNavigation/CarousalRightNavigation';

const Controls = ({ data }) => {
   
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};
const Carousal = ({ data,renderCardComponent }) => {
  return (
    <div className={styles.Wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        {/* <CarousalLeftNavigation/>
        <CarousalRightNavigation/> */}
        {data.map((item)=>{
            <SwiperSlide>{renderCardComponent(item)}</SwiperSlide>
        })}
      </Swiper>
    </div>
  );
};

export default Carousal;
