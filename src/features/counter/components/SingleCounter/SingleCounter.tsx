import "./SingleCounter.scss";

type SingleCounterProps = {
  count: number;
  title?: string;
};

const SingleCounter = ({ count, title }: SingleCounterProps): JSX.Element => (
  <div className="single-counter">
    {title && <h3 className="single-counter__title">{title}</h3>}
    <span className="single-counter__count">{count}</span>
  </div>
);

export default SingleCounter;
