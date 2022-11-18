import moment, { Moment } from 'moment';
import { useEffect } from 'react';
import CountData from '../types/CountData';

const second = 1000;

const useCounter = (
  setViewDate: (value: React.SetStateAction<CountData>) => void,
  limitDate: string,
  currentTime: Moment
) => {
  useEffect(() => {
    const eventTime = moment(limitDate);
    let duration = moment.duration(eventTime.diff(currentTime));

    const counter = setInterval(() => {
      duration = moment.duration(
        duration.asMilliseconds() - second,
        'milliseconds'
      );

      const date = {} as CountData;

      Math.floor(duration.asDays()) >= 0
        ? (date.days = Math.floor(duration.asDays()))
        : (date.days = 0);

      duration.hours() >= 0
        ? (date.hours = duration.hours())
        : (date.hours = 0);

      duration.minutes() >= 0
        ? (date.minutes = duration.minutes())
        : (date.minutes = 0);

      duration.seconds() >= 0
        ? (date.seconds = duration.seconds())
        : (date.seconds = 0);

      setViewDate(date);
    }, second);

    return () => clearInterval(counter);
  }, [currentTime, setViewDate, limitDate]);
};

export default useCounter;
