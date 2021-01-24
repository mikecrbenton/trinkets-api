import React, { useHistory } from 'react'


const useHistoryHook = (route) => {
   console.log("USE HISTORY HOOK IS CALLED", typeof(route) )

   const { push } = useHistory();
   push(route) 

}

export default useHistoryHook;
