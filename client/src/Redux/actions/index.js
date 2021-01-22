import axios from 'axios'

export const GET_ITEMS = "GET_ITEMS"

// GET STORE ITEMS FROM DATABASE============================
export const getItems = () => {

   return dispatch => {
      //ADD AXIOS WITH AUTH
      axios
       .get("http://localhost:3333/items")
         .then((res) => {
            dispatch( { type: GET_ITEMS, payload: res.data })
        })
         .catch((error) => console.log(error));
   }
}
