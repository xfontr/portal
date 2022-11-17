import moment from "moment";
import { useEffect, useState } from "react";
import isDateZero from "../../services/isDateZero";
import CountData from "../../types/CountData";
import Counter from "../Counter/Counter";

const second = 1000;
const currentTime = moment();

type DateCounterProps = {
  limitDate: `${string}-${string}-${string}`;
};

const DateCounter = ({ limitDate }: DateCounterProps): JSX.Element => {
  const [viewDate, setViewDate] = useState<CountData>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventTime = moment(limitDate);
    let duration = moment.duration(eventTime.diff(currentTime));

    const counter = setInterval(() => {
      duration = moment.duration(
        duration.asMilliseconds() - second,
        "milliseconds"
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
  }, [limitDate]);

  return (
    <>
      {isDateZero(viewDate) ? (
        <span>Counter is over</span>
      ) : (
        <Counter dataToCount={viewDate} />
      )}
    </>
  );
};

export default DateCounter;
