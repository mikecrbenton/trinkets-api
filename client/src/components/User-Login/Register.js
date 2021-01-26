import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from '../../utils/AxiosWithAuth'
import styled from 'styled-components'

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

  const changeHandler = (ev) => {
    ev.persist();
    setUser( {...user, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (e) => {
   e.preventDefault();
   axiosWithAuth().post("/register", user)
     .then((res) => {            
        window.localStorage.setItem("token", res.data.payload);
        push("/item-list-redux");
     })
     .catch((err) => console.log(err));
  };

  return (
    <FormWrapper>
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
    </FormWrapper>
  );
};

export default RegisterForm;


const FormWrapper = styled.div`

   form{
      margin: 0 auto;
      width: 300px;
   }
   input{
      border: 0;
      outline: none;
   }
   
   // BASELINE CLASS=========================================================
   
   .baseline,
   input {
      background-color: #fff;
      font-size: 21px;
      height: 50px;
      width: 300px;
      padding: 0 8px;
      color: #1c5d76;
   }
   .baseline {
      height: 3px;
      background-color: #dcdcdc;
   }

   /*********** Hover.css > Underline From Left > Modified *******************/
   .baseline {
      -webkit-transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      display: block;
      /*display: inline-block;*/
      overflow: hidden;
      position: relative;
      transform: perspective(1px) translateZ(0);
   /***************** vertical-align: middle;**************************/
   }
   .baseline:before {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      right: 100%;
      bottom: 0;
      background: #1c5d76;
      height: 4px;
      -webkit-transition-property: right;
      transition-property: right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
   }
   .baseline:hover:before,
   .baseline:focus:before,
   .baseline:active:before {
       right: 0;
   }

   /************ Crucial style rule ******************/
   input:focus + .baseline:before {
      right: 0;
   }

   // BUTTON=======================================
   button{
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      margin: 24px 0 ;  // FORM MARGIN
      border: none;
      border-radius: 2px;
      padding: 0 16px;
      min-width: 64px;
      height: 36px;
      vertical-align: middle;
      text-align: center;
      text-overflow: ellipsis;
      text-transform: uppercase;
      color: #fff;
      background-color: #1c5d76;
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
         0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      font-family: 'Roboto', 'Segoe UI', BlinkMacSystemFont, system-ui,
         -apple-system;
      font-size: 14px;
      font-weight: 500;
      line-height: 36px;
      overflow: hidden;
      outline: none;
      cursor: pointer;
      transition: box-shadow 0.2s;
   }
   button:hover,
   button:focus {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
         0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
   }

   button:active {
      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
         0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
   }

   button:disabled {
      color: rgba(0, 0, 0, 0.38);
      background-color: rgba(0, 0, 0, 0.12);
      box-shadow: none;
      cursor: initial;
   }

   button::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: currentColor;
      opacity: 0;
      transition: opacity 0.2s;
   }

   button:hover::before {
      opacity: 0.12;
   }

   button:focus::before {
      opacity: 0.2;
   }

   button:active::before {
      opacity: 0.32;
   }

   button:disabled::before {
      opacity: 0;
   }

   button::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 18px;
      border-radius: 50%;
      padding: 50%;
      width: 32px;
      height: 32px;
      background-color: currentColor;
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
      transition: opacity 1s, transform 0.5s;
   }

   button:active::after {
      opacity: 0.4;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0s;
   }

   button:disabled::after {
      opacity: 0;
   }

`;