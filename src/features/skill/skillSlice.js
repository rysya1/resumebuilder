import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    skills: []
}
export const skillSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {
		addSkill: (state, action) => {
			state.skills.push(action.payload)
		},
		removeSkill:(state,action) => {
			state.skills = state.skills.filter((skill) => skill.id === action.payload.id)
		}
	},
})
export const { addSkill,removeSkill } = skillSlice.actions
export default skillSlice.reducer
