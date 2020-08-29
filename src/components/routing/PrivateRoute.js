import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from '../auth/helpers';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      // if the user is authenticated show Private.js otherwise redirect to /login
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  ></Route>
);

export default PrivateRoute;
