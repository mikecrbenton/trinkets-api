import React from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import axios from "axios";

import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";

//REDUX
import {connect} from 'react-redux'
import {deleteItem} from '../Redux/actions'


// ============================INDIVIDUAL ITEM PAGE==============================
function Item(props) {

  //console.log("REDUX STATE PROPS IN ITEM ARE: ", props.state.items)
  //console.log("ID PARAMETER PASSED IN ARE: ", props.match.params)

  const { push } = useHistory();
  // same as:
  // const history = useHistory();
  // const push = history.push;

  // LOCAL STATE-------------------------------------
//   const item = props.items.find(
//     (thing) => `${thing.id}` === props.match.params.id
//   );
//   //console.log("LOCAL ITEM :", item)
//   if (!props.items.length || !item) {
//     return <h2>Loading item data...</h2>;
//   }
  // LOCAL STATE-------------------------------------
  // REDUX STATE=====================================
   const reduxItem = props.state.items.find( (thing) => {
      return `${thing.id}` === props.match.params.id
   });
   //console.log("REDUX ITEM :",reduxItem.id)
   if (!props.state.items.length || !reduxItem) {
      return <h2>Loading item data...</h2>;
   }
  // REDUX STATE=====================================


  // LOCAL FUNCTION----------------------------------
//   const delete = (e) => {
//     e.preventDefault();
//     axios
//       .delete(`http://localhost:3333/items/${item.id}`)
//       .then((res) => {
//         // res.data
//         console.log("RES.DATA IN DELETE: ", res.data)
//         props.setItems(res.data);
//         // res.data ==> just the id
//         // const newItems = props.items.filter(v => `${v.id}` !== res.data)
//         // props.setItems(newItems)
//         push("/item-list");
//       })
//       .catch((err) => console.log(err));
//   };
  // LOCAL FUNCTION----------------------------------

  const deleteWrapper = () => {
     props.deleteItem(reduxItem.id)
     push("/item-list-redux");
  }

  return (
    <div className="item-wrapper">

      <div className="item-header">

        {/* ==============LOCAL STATE============== */}
        {/* <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>

        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div> */}

        {/* ==============REDUX STATE============== */}
        <div className="image-wrapper">
          <img src={reduxItem.imageUrl} alt={reduxItem.name} />
        </div>

        <div className="item-title-wrapper">
          <h2>{reduxItem.name}</h2>
          <h4>${reduxItem.price}</h4>
        </div>

      </div>



      <nav className="item-sub-nav">
        {/* ==============LOCAL STATE============== */}
        {/* <NavLink exact to={`/item-list/${item.id}`}>
          the story
        </NavLink>
        <NavLink to={`/item-list/${item.id}/shipping`}>shipping</NavLink> */}

        {/* ==============REDUX STATE============== */}
        <NavLink exact to={`/item-list/${reduxItem.id}`}>
          the story
        </NavLink>
        <NavLink to={`/item-list/${reduxItem.id}/shipping`}>shipping</NavLink>
      </nav>



      {/* ==============LOCAL STATE============== */}
      {/* <Route
        exact
        path="/item-list/:id"
        render={(props) => <ItemDescription {...props} item={item} />}
      />
      <Route
        path="/item-list/:id/shipping"
        render={(props) => <ItemShipping {...props} item={item} />}
      /> */}

       {/* ==============REDUX STATE============== */}
       <Route
        exact path="/item-list/:id"
        render={(props) => <ItemDescription {...props} item={reduxItem} />}
      />
      <Route
        exact path="/item-list/:id/shipping"
        render={(props) => <ItemShipping {...props} item={reduxItem} />}
      />



      {/* ==============LOCAL STATE============== */}
      {/* <button
        className="md-button"
        onClick={() => push(`/update-item/${item.id}`)}
      >
        Edit
      </button>

      <button className="md-button" onClick={deleteItem}>
        Delete
      </button> */}


       {/* ==============REDUX STATE============== */}
       <button
        className="md-button"
        onClick={() => push(`/update-item-redux/${reduxItem.id}`)}
      >
        Redux Edit
      </button>

      <button className="md-button" onClick={() => {deleteWrapper()} }>
        Redux Delete
      </button>

    </div>
  );
}

const mapStateToProps = (state) => {
   return {
      state
   }
}

export default connect( mapStateToProps, {deleteItem})(Item);
