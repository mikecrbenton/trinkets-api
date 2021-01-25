import React, { useEffect } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "./components/Home";
import Item from "./components/Item";
import Login from "./components/User-Login/Login"
import Register from "./components/User-Login/Register"
import PrivateRoute from './utils/PrivateRoute'
import "./styles.css";

// REDUX=======================================
import { connect } from 'react-redux'
import { getItems } from './Redux/actions/index'
import UpdateForm_REDUX from './components/UpdateForm_REDUX'
import ItemForm_REDUX from './components/ItemForm_REDUX'
import ItemsList_REDUX from './components/ItemsList_REDUX'


function App (props) {

  // APP LEVEL STATE BEFORE REDUX-----------------
  // const [items, setItems] = useState([]);


  //console.log("REDUX STATE IN APP IS: ", props.items)
  //console.log("LOCAL STATE IN APP IS: ", items)


  // SET INITIAL STATE OF THE ITEMS 
  useEffect(() => {
    props.getItems() 
  }, []);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Online Marketplace</h1>

        <div className="nav-links">

          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink exact to="/login">
            Login
          </NavLink>

          <NavLink exact to="/item-form-redux">
           Add-Item
          </NavLink>

          {/* <NavLink exact to="/item-form">
            Add Item
          </NavLink> */}

          {/* <NavLink to="/item-list">Shop</NavLink> */}

          <NavLink to="/item-list-redux">Shop</NavLink>

        </div>

      </nav>

      <Route exact path="/" component={Home} />
{/* 
      <Route
        exact
        path="/item-list"
        render={(props) => <ItemsList {...props} items={items} />}
      /> */}

      {/* <Route
        path="/item-list/:id"
        render={(props) => (
          <Item {...props} items={items} setItems={setItems} />
        )}
      /> */}

      {/* <Route 
        path="/item-form" 
        render={() => <ItemForm items={items} setItems={setItems} /> }
      /> */}

      {/* <Route
        path="/update-item/:id"
        render={() => <UpdateForm items={items} setItems={setItems} />}
      /> */}

      {/* ================REDUX ROUTE==================== */}
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>

      <Route exact path="/item-list/:id" component={Item}/>

      {/* <Route exact path="/item-list-redux" component={ItemsList_REDUX}/> */}
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
