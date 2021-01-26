import React from 'react';
import styled from 'styled-components'

function ItemDescription(props) {

  //console.log("ITEM DESCRIPTION IS CALLED", props)

  return (
    <div>
      <ItemInfo>{props.item.description}</ItemInfo>
    </div>
  );
}

export default ItemDescription;

const ItemInfo = styled.p`
   max-width: 720px;
   margin: 32px auto;
`;
