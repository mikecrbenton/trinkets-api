import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

   const token = window.localStorage.getItem("token");
   console.log("TOKEN: ",token)

  //RETURNS A <ROUTE> COMPONENT
  return (
    <Route {...rest}  // rest operator takes an object and destructure it, and rebuild it
      // render prop that returns a component
      render={ (props) => {
        if (token) {
          console.log("token found - success")
          return <Component {...props} />;
        } else {
          console.log("error - no token")
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
