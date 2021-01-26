import React, { useEffect } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Item from "./components/Item";
import Login from "./components/User-Login/Login"
import Register from "./components/User-Login/Register"
import PrivateRoute from './utils/PrivateRoute'
import styled from 'styled-components'
import "./styles.css";

// REDUX=======================================
import { connect } from 'react-redux'
import { getItems } from './Redux/actions/index'
import UpdateForm_REDUX from './components/UpdateForm_REDUX'
import ItemForm_REDUX from './components/ItemForm_REDUX'
import ItemsList_REDUX from './components/ItemsList_REDUX'


function App (props) {

  // SET INITIAL STATE OF THE ITEMS 
  useEffect(() => {
    props.getItems() 
  }, []);

  return (
    <div className="App">
       
      <Navigation>
        <h1>Online Marketplace</h1>
        <div className="nav-links">
          <NavLink exact to="/"> Home </NavLink>
          <NavLink exact to="/login"> Login </NavLink>
          <NavLink exact to="/item-form-redux"> Add-Item </NavLink>
          <NavLink to="/item-list-redux"> Shop </NavLink>
        </div>
      </Navigation>

      <Route exact path="/" component={Home} />

      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>

      <Route exact path="/item-list/:id" component={Item}/>

      <PrivateRoute exact path="/item-list-redux" component={ItemsList_REDUX}/>
      <Route path="/item-form-redux" component={ItemForm_REDUX} />
      <Route path="/update-item-redux/:id" component={UpdateForm_REDUX} />
      
    </div>
  );
};

const mapStateToProps = (state) => {
   return {
      items : state
   }
}
export default connect(mapStateToProps,{getItems})(App);

const Navigation = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 16px;
   border-bottom: 1px solid #efefef;
   margin-bottom: 32px;

   h1{
      color: #1c5d76;
   }

   .nav-links{
      display: flex;
      justify-content: space-between;
   
      a{
         text-decoration: none;
         color: #1c5d76;
         font-weight: bold;
         margin-right: 8px;
      }
      a:last-of-type{
         margin-right: 0;
      }
      a.active {
         border-bottom: 1px solid #1c5d76;
       }
   }
`;
