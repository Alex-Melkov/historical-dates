import React from 'react';

import styles from './TimePaginate.module.scss';

type TimePaginateProps = {
  activeDate: number;
  onPlusDate: () => void;
  noMinusDate: () => void;
};

const TimePaginate: React.FC<TimePaginateProps> = ({ activeDate, onPlusDate, noMinusDate }) => {
  return (
    <div className={styles.container}>
      <div className={styles.counter}>0{activeDate + 1}/06</div>
      <div className={styles.buttonsBlock}>
        <button
          onClick={noMinusDate}
          className={styles.btnBack}
          disabled={activeDate === 0 ? true : false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none">
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </button>
        <button
          onClick={onPlusDate}
          className={styles.btnForward}
          disabled={activeDate === 5 ? true : false}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="14"
            viewBox="0 0 10 14"
            fill="none">
            <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TimePaginate;
