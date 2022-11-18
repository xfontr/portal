import moment from "moment";
import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter";
import isDateZero from "../services/isDateZero";
import CountData from "../types/CountData";
import Counter from "./Counter/Counter";
import CounterFinish from "./CounterFinish";

const currentTime = moment();

type DateCounterProps = {
  limitDate: `${string}-${string}-${string}`;
};

const DateCounter = ({ limitDate }: DateCounterProps): JSX.Element => {
  const eventTime = moment(limitDate);
  let duration = moment.duration(eventTime.diff(currentTime));

  const [viewDate, setViewDate] = useState<CountData>({
    days: Math.floor(duration.asDays()),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  });

  useCounter(setViewDate, limitDate, currentTime);

  return (
    <>
      {isDateZero(viewDate) ? (
        <CounterFinish {...{ limitDate }} />
      ) : (
        <Counter dataToCount={viewDate} />
      )}
    </>
  );
};

export default DateCounter;
