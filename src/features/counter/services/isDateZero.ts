import CountData from '../types/CountData';

const isDateZero = (date: CountData): boolean =>
  Object.values(date)
    .map((moment) => moment === 0)
    .toString() ===
  Object.keys(date)
    .map(() => true)
    .toString();

export default isDateZero;
