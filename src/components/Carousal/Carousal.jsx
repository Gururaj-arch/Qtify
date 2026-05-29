import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from './Carousal.module.css';
import { useEffect } from 'react';
import 'swiper/css';

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};

const Carousal = ({ data = [], renderCardComponent }) => {
  return (
    <div className={styles.Wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderCardComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;