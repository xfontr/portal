import { Suspense } from "react";
import Counter from "../../features/counter/components/Counter/Counter";
import routes from "../../routes/routes";
import LoadRoutes from "../LoadRoutes/LoadRoutes";
import "./App.scss";

const App = () => (
  <div className="app snowball">
    <Suspense>
      <LoadRoutes {...{ routes }} />
      <Counter
        dataToCount={[
          { count: 12, title: "days" },
          { count: 12, title: "months" },
        ]}
      />
    </Suspense>
  </div>
);

export default App;
