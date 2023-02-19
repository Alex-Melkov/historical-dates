import React from 'react';

import styles from './Title.module.scss';

const Title: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxGradient}></div>
      <div className={styles.text}>
        <p>Исторические даты</p>
      </div>
    </div>
  );
};

export default Title;
