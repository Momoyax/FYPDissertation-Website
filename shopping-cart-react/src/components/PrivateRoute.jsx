import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { ShopContext } from "../context/shop-context";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(ShopContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;