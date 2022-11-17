import DateCounter from "../features/counter/components/DateCounter/DateCounter";

const christmasDate = "2022-12-24";

const ChristmasPage = (): JSX.Element => (
  <>
    <DateCounter limitDate={christmasDate} />
  </>
);

export default ChristmasPage;
