import { Suspense } from "react";
import routes from "../../routes/routes";
import LoadRoutes from "../LoadRoutes/LoadRoutes";
import "./App.scss";

const App = () => (
  <div className="app snowball">
    <Suspense>
      <LoadRoutes {...{ routes }} />
    </Suspense>
  </div>
);

export default App;
