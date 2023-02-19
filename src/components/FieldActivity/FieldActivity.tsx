import React from 'react';

import { field } from '../App/App';

import styles from './FieldActivity.module.scss';

type FieldActivityProps = {
  activeDate: number;
};

const FieldActivity: React.FC<FieldActivityProps> = ({ activeDate }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{field[activeDate]}</p>
    </div>
  );
};

export default FieldActivity;
