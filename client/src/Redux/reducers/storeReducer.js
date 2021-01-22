// 3 STANDARD VALUES:  ERROR(STRING), LOADING(BOOLEAN), SUCCESS
import { GET_ITEMS } from '../actions/index'

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

      case GET_ITEMS:
         return  {...state, items: [ ...action.payload]} 


     default:
       return state;
   }

 };
 