import React from 'react';
import styled from 'styled-components'
//REDUX
import { connect } from 'react-redux'

function ItemsList_REDUX(props) {

  //console.log("PROPS IS ", props.state.items )

  function routeToItem(ev, item) {
    ev.preventDefault();
    props.history.push(`/item-list/${item.id}`);
  }

  return (

    <ItemsListWrapper>

         { !props.state.items ? (
            <h1>Loading...</h1>
            ) : (  
            props.state.items.map( item => {

               return (
                  <div
                     className="item-card"
                     onClick={ev => routeToItem(ev, item)}
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

    </ItemsListWrapper>

  );
}

const mapStateToProps = (state) => {
   return {state}
}

export default connect(mapStateToProps, {})(ItemsList_REDUX);

const ItemsListWrapper = styled.div`
   margin-top: 36px;
   display: flex;
   flex-wrap: wrap;
   justify-content: center;

   // CARD===============
   .item-card {
      width: 250px;
      margin: 0 10px 32px;
      cursor: pointer;
    }
    .item-card p {
      margin: 0 0 4px;
      text-align: left;
      color: #595959;
    }
    .item-card a {
      text-decoration: none;
    }

    // IMAGE==============
    .item-list-image {
      width: 100%;
      border: 1px solid lightgray;
    }

`;