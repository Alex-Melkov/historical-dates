import React from 'react';

import { dates } from '../App/App';

import styles from './PaginationBullet.module.scss';

type PaginationBulletProps = {
  activeDate: number;
  onClickActiveDate: (index: number) => void;
};

const PaginationBullet: React.FC<PaginationBulletProps> = ({ activeDate, onClickActiveDate }) => {
  return (
    <div className={styles.pagination}>
      {dates.map((item, index) => (
        <div
          onClick={() => onClickActiveDate(index)}
          key={index}
          className={activeDate === index ? `${styles.active}` : styles.paginationBullet}></div>
      ))}
    </div>
  );
};

export default PaginationBullet;
