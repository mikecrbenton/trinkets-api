import React from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import styled from 'styled-components'

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
    <ItemWrapper>

      <div className='item-header'>

        <div className="image-wrapper">
          <img src={reduxItem.imageUrl} alt={reduxItem.name} />
        </div>

        <div className="item-title-wrapper">
          <h2>{reduxItem.name}</h2>
          <h4>${reduxItem.price}</h4>
        </div>

      </div>

      <nav>
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

       <button onClick={() => push(`/update-item-redux/${reduxItem.id}`)}> Edit </button>
       <button onClick={() => {deleteWrapper()} }> Delete </button>

    </ItemWrapper>
  );
}

const mapStateToProps = (state) => {
   return {
      state
   }
}

export default connect( mapStateToProps, {deleteItem})(Item);

const ItemWrapper = styled.div`
   max-width: 900px;
   margin: 0 auto;
   
   // HEADER========================
   .item-header{
      display: flex
   }
   
   h2,
   .item-header h2,
   .item-header h4 {
      color: #1c5d76;
      margin: 0;
   }

   .item-header h4 {
      margin-top: 16px;
   }

   .image-wrapper{
      width: 50%;
      display: flex;
      justify-content: flex-start;
   }
   .item-title-wrapper{
      width: 50%;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
   }

   // NAV==========================
   nav{
      border-bottom: 1px solid #a1d5d4;
      justify-content: center;
   }
   nav a{
      color: #a5a5a5;
      text-decoration: none;
      padding: 12px;
   }
   nav a.active{
      color: #1c5d76;
      font-weight: bold;
   }
   nav a:first-of-type{
      margin-right: 32px;
   }

   // BUTTON========================
   button{
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      margin: 0 8px 24px;  // 24 px item buttons only
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

