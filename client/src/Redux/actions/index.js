import axios from 'axios'

export const GET_ITEMS = "GET_ITEMS"
export const ADD_ITEM = "ADD_ITEM"
export const UPDATE_BY_ID = "UPDATE_BY_ID"
export const DELETE_ITEM = "DELETE_ITEM"

// GET STORE ITEMS FROM DATABASE============================
export const getItems = () => {

   return dispatch => {
      //ADD AXIOS WITH AUTH
      axios.get("http://localhost:3333/items")
         .then((res) => {
            dispatch( { type: GET_ITEMS, payload: res.data })
        })
         .catch((error) => console.log(error));
   }
}

// POST NEW ITEM==========================================
export const addNewItem = (item) => {

   return dispatch => {
      //ADD AXIOS WITH AUTH
      axios.post(`http://localhost:3333/items/`, item)
      .then((res) => {
        console.log( "DATA FROM ADD NEW : ", res.data )
        dispatch( { type: ADD_ITEM, payload: res.data})
      })
      .catch((err) => console.log(err));
   }
}

// UPDATE BY ID============================================
export const updateById = (id, item) => {
   const idString = id.toString()
   return dispatch => {
      // ADD AXIOS WITH AUTH
      axios.put(`http://localhost:3333/items/${idString}`, item)
      .then((res) => {
        console.log("res data in updateById: ",res.data)
        dispatch( { type: UPDATE_BY_ID, payload: res.data })
      })
      .catch((err) => console.log(err));
   }
}

// DELETE ITEM FROM DATABASE================================
export const deleteItem = (id) => {
    //console.log("deleteItem in Action called: ", id)
    //e.preventDefault();
    const idString = id.toString()
    
    return dispatch => {
      axios.delete(`http://localhost:3333/items/${idString}`)
         .then( res => {
            //console.log("REDUX DELETE IS CALLED", res.data)
            dispatch( { type: DELETE_ITEM, payload: res.data })
         })
         .catch( err => console.log("ERROR IN DELETE", err))
    }
}



