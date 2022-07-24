import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/user';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.FunctionComponent<any>;
  path: string;
  exact?: boolean;
}

function PrivateRoute({ component: Component, ...rest }: PrivateRouteProps) {
  const auth = useRecoilValue(userState);

  return (
    <Route
      {...rest}
      render={(props: { location: any }) => {
        const state = { from: props.location };
        const hasPermission = false;

        if (auth && !hasPermission) {
          return <Redirect to={{ pathname: '/error', state }} />;
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
