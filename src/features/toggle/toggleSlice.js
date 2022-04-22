import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   boolean: {
      toggleState: false,
   },
}
export const toggleSlice = createSlice({
   name: 'toggle',
   initialState,
   reducers: {
      showEdit: (state) => {
         state.boolean.toggleState = true
      },
      hideEdit(state) {
         state.boolean.toggleState = false
      },
   },
})
export const toggleActions = toggleSlice.actions
export default toggleSlice.reducer
