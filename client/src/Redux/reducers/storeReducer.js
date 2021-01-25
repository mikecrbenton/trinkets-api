// 3 STANDARD VALUES:  ERROR(STRING), LOADING(BOOLEAN), SUCCESS
import { 
   GET_ITEMS,
   UPDATE_BY_ID,
   ADD_ITEM,
   DELETE_ITEM } from '../actions/index'

const initialState = { 
   items: [
      {
         name: '',
         price: '',
         imageUrl: '',
         description: '',
         shipping: ''
      }
   ] }
 
 
 export const storeReducer = (state = initialState, action) => {

   switch (action.type) {

      // SHOULD REFACTOR TO "setItems()" - ALL THESE DO THE SAME
      case GET_ITEMS:
         //console.log("GET_ITEMS IS CALLED")
         return  {...state, items: [...action.payload] } 
      
      case UPDATE_BY_ID: 
         //console.log("UPDATE BY ID IS CALLED")
         return  {...state, items: [...action.payload] } 
      
      case ADD_ITEM: 
         //console.log("ADD ITEM IS CALLED")
         return  {...state, items: [...action.payload] } 
      
      case DELETE_ITEM:
         //console.log("DELETE_ITEM IS CALLED", action.payload)
         return  { items: [ ...action.payload]  } // RELOADS FROM API - WORKING

      default:
         return state;
   }

 };
 