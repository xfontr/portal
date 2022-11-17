import { ReactNode } from 'react';
import PageInformation from './PageInformation';

interface RouteData {
  path: string;
  navigate?: string;
  Page?: React.LazyExoticComponent<() => JSX.Element>;
  heading?: PageInformation;
  sidebar?: ReactNode[];
}

export default RouteData;
