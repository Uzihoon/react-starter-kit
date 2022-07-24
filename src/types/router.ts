export interface Route {
  component: React.FunctionComponent<any>;
  path: string;
  exact?: boolean;
  title: string;
  hiddenMenu?: boolean;
  rootURL?: boolean;
}

export interface RouteList {
  title: string;
  id: string;
  children: Route[];
  uniqueMenu?: boolean;
  visibleChild?: boolean;
}
