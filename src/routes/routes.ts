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
    Page: lazy(() => import('../features/counter/pages/ChristmasPage')),
    sidebar: [SignForm],
    heading: {
      title: 'ENJOY CHRISTMAS HOLIDAYS',
      subtitle:
        'Qui cillum et excepteur proident do dolor labore duis nisi consequat. Ullamco incididunt quis ullamco esse voluptate incididunt.',
      highlights: {
        words: ['CHRISTMAS'],
      },
      props: {
        className: 'heading--main',
      },
    },
  },
  {
    path: paths.signSuccess,
    Page: lazy(() => import('../features/signUp/pages/SuccessPage')),
    heading: {
      title: 'THANK YOU FOR JOINING SGS SECRET SANTA',
      subtitle:
        'Qui cillum et excepteur proident do dolor labore duis nisi consequat. Ullamco incididunt quis ullamco esse voluptate incididunt.',
      highlights: {
        words: ['SGS'],
      },
    },
  },
  {
    path: paths.notFound,
    Page: lazy(() => import('../pages/NotFoundPage')),
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
