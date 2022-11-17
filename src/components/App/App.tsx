import { Suspense } from "react";
import DateCounter from "../../features/counter/components/DateCounter/DateCounter";
import routes from "../../routes/routes";
import LoadRoutes from "../LoadRoutes/LoadRoutes";
import "./App.scss";

const christmasDate = "2022-12-24";

const App = () => (
  <div className="app snowball">
    <Suspense>
      <LoadRoutes {...{ routes }} />
      <DateCounter limitDate={christmasDate} />
    </Suspense>
  </div>
);

export default App;
