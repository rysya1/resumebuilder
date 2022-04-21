import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   toggleState:JSON.parse(localStorage.getItem('skills')) || false,
}
export const toggleSlice = createSlice({
   name: 'toggle',
   initialState,
   reducers: {
      showEdit: (state) => {
         state.toggleState = true
      },
      hideEdit(state) {
         state.toggleState = false
      },
   },
})
export const toggleActions = toggleSlice.actions
export default toggleSlice.reducer
