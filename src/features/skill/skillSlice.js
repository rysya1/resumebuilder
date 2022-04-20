import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   skills: [],
   localSkills: [],
}
export const skillSlice = createSlice({
   name: 'skills',
   initialState,
   reducers: {
      addSkill: (state, action) => {
         state.skills.push(action.payload)
      },
      removeSkill: (state, action) => {
         const currentSkill = state.skills.findIndex(
            (el) => el.id === action.payload
         )
         state.skills.splice(currentSkill, 1)
      },
      getSkillsInLocalStorege(state, action) {
         state.skills = action.payload
      },
   },
})
export const { addSkill, removeSkill, getSkillsInLocalStorege } =
   skillSlice.actions
export default skillSlice.reducer
