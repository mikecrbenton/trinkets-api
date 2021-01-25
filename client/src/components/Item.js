import React from "react";
import { Route, NavLink, useHistory } from "react-router-dom";

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
 
   const reduxItem = props.state.items.find( (thing) => {
      return `${thing.id}` === props.match.params.id
   });
   if (!props.state.items.length || !reduxItem) {
      return <h2>Loading item data...</h2>;
   }
 
  const deleteWrapper = () => {
     props.deleteItem(reduxItem.id)
     push("/item-list-redux");
  }

  return (
    <div className="item-wrapper">

      <div className="item-header">

        <div className="image-wrapper">
          <img src={reduxItem.imageUrl} alt={reduxItem.name} />
        </div>

        <div className="item-title-wrapper">
          <h2>{reduxItem.name}</h2>
          <h4>${reduxItem.price}</h4>
        </div>

      </div>

      <nav className="item-sub-nav">
        <NavLink exact to={`/item-list/${reduxItem.id}`}>
          the story
        </NavLink>
        <NavLink to={`/item-list/${reduxItem.id}/shipping`}>shipping</NavLink>
      </nav>


       <Route
        exact path="/item-list/:id"
        render={(props) => <ItemDescription {...props} item={reduxItem} />}
      />
      <Route
        exact path="/item-list/:id/shipping"
        render={(props) => <ItemShipping {...props} item={reduxItem} />}
      />


       <button
        className="md-button"
        onClick={() => push(`/update-item-redux/${reduxItem.id}`)}
      >
        Edit
      </button>

      <button className="md-button" onClick={() => {deleteWrapper()} }>
        Delete
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
