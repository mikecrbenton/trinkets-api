import React from 'react';
import { Link } from 'react-router-dom';

function ItemsList(props) {

  //console.log("PROPS.ITEMS IS ", props.items )
  //console.log("PROPS TYPE IS", typeof(props.items))

  function routeToItem(ev, item) {
    ev.preventDefault();
    props.history.push(`/item-list/${item.id}`);
  }

  return (

    <div className="items-list-wrapper">

         { !props.items ? (
            <h1>Loading...</h1>
            ) : (  
            props.items.map( item => {

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

export default ItemsList;

/*
TERNARY PATTERN
return (
   <tag>
      { condition ? (

         <tag>if</tag>

      ) : (

         <tag>else</tag>

      )} 
   </tag>

) // END RETURN
*/