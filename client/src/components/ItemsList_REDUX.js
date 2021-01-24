import React from 'react';
import { Link } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux'

function ItemsList_REDUX(props) {

  console.log("PROPS IS ", props.state.items )
  //console.log("PROPS TYPE IS", typeof(props.items))

  function routeToItem(ev, item) {
    ev.preventDefault();
    props.history.push(`/item-list/${item.id}`);
  }

  return (

    <div className="items-list-wrapper">

         { !props.state.items ? (
            <h1>Loading...</h1>
            ) : (  
            props.state.items.map( item => {

               return (
                  <div
                     onClick={ev => routeToItem(ev, item)}
                     className="item-card"
                     key={item.id}
                     >
                  <img
                     className="item-list-image"
                     src={item.imageUrl}
                     alt={item.name}
                  />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  </div> 
               )})

            )// END TERNARY
         }

    </div>

  );
}

const mapStateToProps = (state) => {
   return {state}
}

export default connect(mapStateToProps, {})(ItemsList_REDUX);
