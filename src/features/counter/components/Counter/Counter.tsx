import CountData from "../../types/CountData";
import SingleCounter from "../SingleCounter/SingleCounter";

type CounterProps = {
  dataToCount: CountData;
};

const Counter = ({ dataToCount }: CounterProps) => (
  <>
    {dataToCount.map((counter) => (
      <SingleCounter count={counter.count} title={counter.title} />
    ))}
  </>
);

export default Counter;
