import React from 'react';

import { dates } from '../App/App';

import styles from './TimeInterval.module.scss';

type TimeIntervalProps = {
  activeDate: number;
};

const TimeInterval: React.FC<TimeIntervalProps> = ({ activeDate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.timeFrom}>{dates[activeDate][0]}</div>
      <div className={styles.timeTo}>{dates[activeDate][1]}</div>
    </div>
  );
};

export default TimeInterval;
