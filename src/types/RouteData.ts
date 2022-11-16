import PageInformation from './PageInformation';

interface RouteData {
  path: string;
  name?: string;
  navigate?: string;
  Page?: React.LazyExoticComponent<() => JSX.Element>;
  pageInformation?: PageInformation;
}

export default RouteData;
