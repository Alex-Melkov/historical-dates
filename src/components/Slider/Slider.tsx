import React from 'react';
import { Navigation, Virtual, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as  SwiperInstance} from 'swiper';

import { timeEvents } from '../App/App';

import 'swiper/scss';
import 'swiper/scss/virtual';
import 'swiper/scss/navigation';
import 'swiper/css/free-mode';

import styles from './Slider.module.scss';

type SliderProps = {
  activeDate: number;
};

const Slider: React.FC<SliderProps> = ({ activeDate }) => {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperInstance | null>(null);

  React.useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0)
    }
    // eslint-disable-next-line
  }, [activeDate])

  let slides = timeEvents[activeDate].map((el, index) => (
    <React.Fragment>
      <p className={styles.slideTime}>{el.time}</p>
      <p>{el.events}</p>
    </React.Fragment>
  ));

  if (window.innerWidth < 601) {
    return (
      <div className={styles.container}>
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className={styles.mySwiper}
          modules={[Virtual, FreeMode]}
          spaceBetween={20}
          slidesPerView={2}
          freeMode={true}
          virtual>
          {slides.map((slideContent, index) => (
            <SwiperSlide className={styles.mySwiperSlide} key={index} virtualIndex={index}>
              {slideContent}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className={styles.mySwiper}
        modules={[Virtual, Navigation, FreeMode]}
        spaceBetween={80}
        slidesPerView={3}
        breakpoints={{
          600: {
            spaceBetween: 80,
            slidesPerView: 1,
          },
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 80,
            slidesPerView: 2,
          },
          1440: {
            spaceBetween: 80,
            slidesPerView: 3,
          },
        }}
        navigation={{
          nextEl: '#swiperButtonNext',
          prevEl: '#swiperButtonPrev',
        }}
        freeMode={true}
        virtual>
        {slides.map((slideContent, index) => (
          <SwiperSlide className={styles.mySwiperSlide} key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={styles.btnPrev}
        id="swiperButtonPrev"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '45px',
          left: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#FFFFFF',
          boxShadow: '0px 0px 15px rgba(56, 119, 238, 0.1)',
          transform: 'rotate(180deg)',
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none">
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
      <button
        className={styles.btnNext}
        id="swiperButtonNext"
        style={{
          cursor: 'pointer',
          position: 'absolute',
          top: '45px',
          right: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#FFFFFF',
          boxShadow: '0px 0px 15px rgba(56, 119, 238, 0.1)',
        }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none">
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
