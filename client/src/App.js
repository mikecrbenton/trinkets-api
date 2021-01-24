import React, { useState, useEffect } from "react";
import { Route, NavLink } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import ItemForm from "./components/ItemForm";
import UpdateForm from "./components/UpdateForm";
import "./styles.css";

// REDUX=======================================
import { connect } from 'react-redux'
import { getItems } from './Redux/actions/index'
import UpdateForm_REDUX from './components/UpdateForm_REDUX'
import ItemForm_REDUX from './components/ItemForm_REDUX'
import ItemsList_REDUX from './components/ItemsList_REDUX'


function App (props) {


  // APP LEVEL STATE BEFORE REDUX-----------------
  const [items, setItems] = useState([]);


  //console.log("REDUX STATE IN APP IS: ", props.items)
  //console.log("LOCAL STATE IN APP IS: ", items)


  // SET INITIAL STATE OF THE ITEMS 
  useEffect(() => {
    const getItems = () => {
      axios
        .get("http://localhost:3333/items")
        .then((res) => {
          setItems(res.data);
        })
        .catch((error) => console.log(error));
    };
    getItems();
    props.getItems() // REDUX ACTION CALL=================

  }, []);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Josh's Trinkets</h1>

        <div className="nav-links">
          {/* ------------REDUX------------- */}
          <NavLink exact to="/item-form-redux">
           REDUX ADD ITEM
          </NavLink>

          <NavLink exact to="/item-form">
            Add Item
          </NavLink>

          <NavLink exact to="/">
            Home
          </NavLink>

          <NavLink to="/item-list">Shop</NavLink>
          <NavLink to="/item-list-redux">REDUX SHOP</NavLink>

        </div>

      </nav>

      <Route exact path="/" component={Home} />

      <Route
        exact
        path="/item-list"
        render={(props) => <ItemsList {...props} items={items} />}
      />

      <Route
        path="/item-list/:id"
        render={(props) => (
          <Item {...props} items={items} setItems={setItems} />
        )}
      />

      <Route 
        path="/item-form" 
        render={() => <ItemForm items={items} setItems={setItems} /> }
      />

      <Route
        path="/update-item/:id"
        render={() => <UpdateForm items={items} setItems={setItems} />}
      />
      {/* ================REDUX ROUTE==================== */}
      <Route exact path="/item-list-redux" component={ItemsList_REDUX}/>
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
