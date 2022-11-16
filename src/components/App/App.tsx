import { Suspense } from "react";
import routes from "../../routes/routes";
import LoadRoutes from "../LoadRoutes/LoadRoutes";

const App = () => (
  <div className="app">
    <Suspense>
      <LoadRoutes {...{ routes }} />
    </Suspense>
  </div>
);

export default App;
