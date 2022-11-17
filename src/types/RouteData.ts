import PageInformation from './PageInformation';

interface RouteData {
  path: string;
  navigate?: string;
  Page?: React.LazyExoticComponent<() => JSX.Element>;
  heading?: PageInformation;
  sidebar?: (() => JSX.Element)[];
}

export default RouteData;
