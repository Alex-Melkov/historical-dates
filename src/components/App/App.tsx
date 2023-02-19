import React, { useRef } from 'react';

import Carousel from '../Carousel/Carousel';
import Slider from '../Slider/Slider';
import TimeInterval from '../TimeInterval/TimeInterval';
import TimePaginate from '../TimePaginate/TimePaginate';
import Title from '../Title/Title';
import FieldActivity from '../FieldActivity/FieldActivity';
import PaginationBullet from '../PaginationBullet/PaginationBullet';

import { getRotation } from '../../utils/getRotation';
import { getRelevantArrayBack } from '../../utils/getRelevantArrayBack';
import { getRelevantArrayForward } from '../../utils/getRelevantArrayForward';

import styles from './App.module.scss';


type DateItemType = {
  time: number;
  events: string;
};

export const dates: number[][] = [
  [1980, 1986],
  [1987, 1991],
  [1992, 1997],
  [1999, 2004],
  [2006, 2014],
  [2015, 2022],
];

export const timeEvents: DateItemType[][] = [
  [
    { time: 1980, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1981, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1983, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1984, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1986, events: 'Какое-то интересное и очень важное событие в мире' },
  ],
  [
    { time: 1987, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1988, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1989, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1990, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1991, events: 'Какое-то интересное и очень важное событие в мире' },
  ],
  [
    { time: 1992, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1993, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1994, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1996, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 1997, events: 'Какое-то интересное и очень важное событие в мире' },
  ],
  [
    { time: 1999, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2000, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2001, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2002, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2003, events: 'Какое-то интересное и очень важное событие в мире' },
  ],
  [
    { time: 2006, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2007, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2009, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2011, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2012, events: 'Какое-то интересное и очень важное событие в мире' },
  ],
  [
    { time: 2015, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2016, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2018, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2020, events: 'Какое-то интересное и очень важное событие в мире' },
    { time: 2021, events: 'Какое-то интересное и очень важное событие в мире' },
  ],
];

export const field: string[] = ['Технологии', 'Кино', 'Литература', 'Театр', 'Спорт', 'Наука'];

const App: React.FC = () => {
  // Индекс активного промежутка времени
  let [activeDate, setActiveDate] = React.useState<number>(0);

  // Массив разрешенных индексов для поворота назад
  let [relevantArrayBack, setRelevantArrayBack] = React.useState<number[]>([]);

  // Массив разрешенных индексов для поворота вперед
  let [relevantArrayForward, setRelevantArrayForward] = React.useState<number[]>([]);
  
  // Угол поврота всей карусели
  let [activeRotate, setActiveRotate] = React.useState<number>(0);

  // Массив с углами поворота шаров карусели
  let [rotateBall, setRotateBall] = React.useState<number[]>([]);

  let rotate = useRef<number[]>();

  rotate.current = getRotation(dates.length);

  React.useEffect(() => {
    setRotateBall(getRotation(dates.length).map((item, index) => {
      let str = String(item);
      let newStr = '-' + str;
      let value = Number(newStr);
      return value
    }));
  }, []);

  React.useEffect(() => {
    rotateCarousel();
    //eslint-disable-next-line
  }, [activeDate]);

  React.useEffect(() => {
    setRelevantArrayForward(getRelevantArrayForward(dates.length, activeDate));
    setRelevantArrayBack(getRelevantArrayBack(dates.length, activeDate));
    //eslint-disable-next-line
  }, [activeRotate]);

  const onPlusDate = () => {
    setActiveDate((prev) => prev + 1);
  };

  const noMinusDate = () => {
    setActiveDate((prev) => prev - 1);
  };

  const onClickActiveDate = (index: number) => {
    setActiveDate(index);
  };

  const rotateCarousel =  () => {
  
    let oneDivision = 360 / dates.length;
    
    if (relevantArrayBack.includes(activeDate) === true) {
        let count = relevantArrayBack.indexOf(activeDate) + 1;
        let value = (count * oneDivision);
        setActiveRotate((prev) => {
          let rotate = prev - value;
          return rotate;
        });
        setRotateBall((prev) => {
          let rotate = prev.map((item, index) => {
            return item + value;
          });
          return rotate;
        });
      } else if (relevantArrayForward.includes(activeDate) === true) {
        let value: number = 0;
        let count = relevantArrayForward.indexOf(activeDate) + 1;
        if (count === 1) {
          value = oneDivision * 2
        }
        if (count === 2) {
          value = oneDivision
        };   
        setActiveRotate((prev) => {
          let rotate = prev + value;
          return rotate;
        });
        setRotateBall((prev) => {
          let rotate = prev.map((item, index) => {
            return item - value;
          });
          return rotate;
        });
    };
    
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.verticalLine}></div>
        <div className={styles.horizonlLine}></div>
        <Title />
        <TimeInterval activeDate={activeDate} />
        <TimePaginate activeDate={activeDate} onPlusDate={onPlusDate} noMinusDate={noMinusDate} />
        <FieldActivity activeDate={activeDate} />
        <Slider activeDate={activeDate} />
        <Carousel
          rotate={rotate.current}
          rotateBall={rotateBall}
          activeRotate={activeRotate}
          onClickActiveDate={onClickActiveDate}
          activeDate={activeDate}
        />
        <PaginationBullet activeDate={activeDate} onClickActiveDate={onClickActiveDate} />
      </div>
    </div>
  );
}

export default App;
