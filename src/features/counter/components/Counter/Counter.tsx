import CountData from "../../types/CountData";
import SingleCounter from "../SingleCounter/SingleCounter";
import "./Counter.scss";

type CounterProps = {
  dataToCount: CountData;
};

const Counter = ({ dataToCount }: CounterProps) => (
  <div className="counter">
    {dataToCount.map(({ count, title }, index) => (
      <SingleCounter {...{ count, title }} key={index} />
    ))}
  </div>
);

export default Counter;
