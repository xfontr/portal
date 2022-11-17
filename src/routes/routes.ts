import { lazy } from 'react';
import SignForm from '../features/signUp/components/SignForm/SignForm';
import RouteData from '../types/RouteData';
import paths from './paths';

const routes: RouteData[] = [
  {
    path: paths.root,
    navigate: paths.joinList,
  },
  {
    path: paths.joinList,
    Page: lazy(() => import('../pages/ChristmasPage')),
    sidebar: [SignForm],
    heading: {
      title: 'Enjoy christmas holidays',
      subtitle: 'Lorem ipsum, lorem ipsum and lorem ipsum.',
      highlights: {
        words: ['christmas'],
      },
    },
  },
  {
    path: paths.notFound,
    Page: lazy(() => import('../pages/ChristmasPage')),
    heading: {
      title: 'Page not found (404)',
      subtitle: "We couldn't find what you are looking for :(",
      highlights: {
        words: ['(404)'],
      },
    },
  },
];

export default routes;
