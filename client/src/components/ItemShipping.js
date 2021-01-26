import React from 'react';
import styled from 'styled-components'

function ItemShipping(props) {

  console.log("SHIPPING IS CALLED :", props)
  
  return (
    <div>
      <ItemInfo>{props.item.shipping}</ItemInfo>
    </div>
  );
}

export default ItemShipping;

const ItemInfo = styled.p`
   max-width: 720px;
   margin: 32px auto;
`;