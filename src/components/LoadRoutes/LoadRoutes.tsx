import { Routes, Navigate, Route } from "react-router-dom";
import RouteData from "../../types/RouteData";
import { Layout } from "../Layout/Layout";

type LoadRoutesProps = {
  routes: RouteData[];
};

const LoadRoutes = ({ routes }: LoadRoutesProps): JSX.Element => (
  <Routes key="routes">
    {routes.map(({ Page, navigate, heading, path, sidebar }) => (
      <Route
        key={path}
        path={path}
        element={
          Page ? (
            <Layout {...{ heading, sidebar }}>
              <Page />
            </Layout>
          ) : (
            <Navigate to={navigate!} />
          )
        }
      />
    ))}
  </Routes>
);

export default LoadRoutes;
