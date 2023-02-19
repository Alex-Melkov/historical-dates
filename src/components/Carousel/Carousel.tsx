import React from 'react';

import ItemCarousel from '../ItemCarousel/ItemCarousel';

import { dates } from '../App/App';

import styles from './Carousel.module.scss';

type CarouselProps = {
  rotate: number[];
  rotateBall: number[];
  activeRotate: number;
  onClickActiveDate: (index: number) => void;
  activeDate: number;
};

const Carousel: React.FC<CarouselProps> = ({ rotate, rotateBall, activeRotate, onClickActiveDate, activeDate}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel} style={{ transform: `rotate(${activeRotate}deg)` }}>
        {dates.map((item, index) => (
          <ItemCarousel
            index={index}
            key={index}
            rotate={rotate}
            rotateBall={rotateBall}
            onClickActiveDate={onClickActiveDate}
            activeDate={activeDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
