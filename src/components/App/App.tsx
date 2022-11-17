import { Suspense } from "react";
import routes from "../../routes/routes";
import LoadRoutes from "../LoadRoutes/LoadRoutes";
import "./App.scss";

const App = () => (
  <div className="snowball">
    <div className="app">
      <Suspense>
        <LoadRoutes {...{ routes }} />
      </Suspense>
    </div>
  </div>
);

export default App;
