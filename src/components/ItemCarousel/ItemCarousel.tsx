import React from 'react';

import styles from './ItemCarousel.module.scss';

type ItemCarouselProps = {
  index: number;
  rotate: number[];
  rotateBall: number[]
  onClickActiveDate: (index: number) => void;
  activeDate: number;
}

const ItemCarousel: React.FC<ItemCarouselProps> = ({ index, rotate, rotateBall, onClickActiveDate, activeDate }) => {

  return (
    <div
      onClick={() => onClickActiveDate(index)}
      className={styles.itemCarousel}
      style={{ transform: `rotate(${rotate[index]}deg)` }}>
      <div className={activeDate === index ? `${styles.active}` : styles.timeBall}>
        <div className={styles.timeBallValue} style={{ transform: `rotate(${rotateBall[index]}deg)`, transitionDuration: '2s' }}>
            {index + 1}
        </div>
      </div>
    </div>
  );
};

export default ItemCarousel;
