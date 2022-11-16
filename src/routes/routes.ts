import RouteData from '../types/RouteData';
import paths from './paths';

const routes: RouteData[] = [
  {
    path: paths.root,
    navigate: paths.joinList,
  },
  {
    path: paths.joinList,
    name: 'Christmas',
    // Page: lazy(() => import('../pages/ChristmasPage/ChristmasPage')),
    pageInformation: {
      title: 'Enjoy christmas holidays',
      subtitle: 'Lorem ipsum, lorem ipsum and lorem ipsum.',
    },
  },
  {
    path: paths.notFound,
    // Page: lazy(() => import('../pages/NotFoundPage/NotFoundPage')),
    pageInformation: {
      title: 'Page not found (404)',
      subtitle: "We couldn't find what you are looking for :(",
    },
  },
];

export default routes;
