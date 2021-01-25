import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from '../../utils/AxiosWithAuth'

const newUser = {
  username: "",
  password: ""
}

//=====================================================================
// THIS CODE IS NOT WORKING YET - JUST PASTED FROM LOGIN AT THIS POINT
//=====================================================================

const RegisterForm = (props) => {

  const { push } = useHistory();
  const [user, setUser] = useState(newUser);
  const { id } = useParams();

  
  const changeHandler = (ev) => {
    ev.persist();
    setUser( {...user, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (e) => {
   e.preventDefault();
   // Make a POST request and send the credentials object to the api
   axiosWithAuth().post("/register", user)
     .then((res) => {            
       window.localStorage.setItem("token", res.data.payload);
       push("/item-list-redux");
     })
     .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={changeHandler}
          placeholder="Name"
          value={user.username}
        />
        <div className="baseline" />

        <input
          type="password"
          name="password"
          onChange={changeHandler}
          placeholder="Password"
          value={user.password}
        />
        <div className="baseline" />

        <button className="md-button form-button">Login</button>
      </form>
    </div>
  );
};

export default RegisterForm;
