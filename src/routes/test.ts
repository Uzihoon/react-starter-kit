import Test from 'components/Test';
import { Route } from 'types/router';

const children: Route[] = [
  {
    path: '/',
    component: Test,
    exact: true,
    title: 'Test',
    rootURL: true
  }
];

export default {
  title: 'Test',
  id: 'test',
  children,
  uniqueMenu: true
};
