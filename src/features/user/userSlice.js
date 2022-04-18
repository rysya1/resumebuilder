import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	content: {
		contact: {
			firstName: '',
			address: '',
			city: '',
			state:'',
			postCode:'',
			elementAddress:'',
			phone:''
		},
	},
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setFirstName: (state, action) => {
			state.firstName = action.payload
		},
		setAddress: (state, action) => {
			state.address = action.payload
		},
		setCity:(state, action) => {
			state.city = action.payload
		},
		setState:(state, action) => {
			state.state = action.payload
		},
		setPostСode:(state, action) => {
			state.postCode = action.payload
		},
		setElementAddress:(state, action) => {
			state.elementAddress = action.payload
		},
		setPhone:(state, action) => {
			state.phone = action.payload
		},
	},
})

export const userActions = userSlice.actions
export default userSlice.reducer
