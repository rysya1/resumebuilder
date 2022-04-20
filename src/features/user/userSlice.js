import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   content: JSON.parse(localStorage.getItem('content')) || {
      contacts: {
         firstName: '',
         address: '',
         city: '',
         state: '',
         postCode: '',
         elementAddress: '',
         phone: '',
      },
      experience: {
         workName: '',
         employer: '',
         cityExperience: '',
         stateExperience: '',
         startDate: '',
         expirationDate: '',
         description: '',
      },
      education: {
         schoolName: '',
         degree: '',
         cityEducation: '',
         stateEducation: '',
         study: '',
         startDateEducation: '',
         expirationDateEducation: '',
         descriptionEducation: '',
      },
   },
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setFirstName: (state, action) => {
         state.content.contacts.firstName = action.payload
      },
      setAddress: (state, action) => {
         state.content.contacts.address = action.payload
      },
      setCity: (state, action) => {
         state.content.contacts.city = action.payload
      },
      setState: (state, action) => {
         state.content.contacts.state = action.payload
      },
      setPostСode: (state, action) => {
         state.content.contacts.postCode = action.payload
      },
      setElementAddress: (state, action) => {
         state.content.contacts.elementAddress = action.payload
      },
      setPhone: (state, action) => {
         state.content.contacts.phone = action.payload
      },
      // experience
      setWorkName: (state, action) => {
         state.content.experience.workName = action.payload
      },
      setEmployer: (state, action) => {
         state.content.experience.employer = action.payload
      },
      setCityExperience: (state, action) => {
         state.content.experience.cityExperience = action.payload
      },
      setStateExperience: (state, action) => {
         state.content.experience.stateExperience = action.payload
      },
      setStartDate: (state, action) => {
         state.content.experience.startDate = action.payload
      },
      setExpirationDate: (state, action) => {
         state.content.experience.expirationDate = action.payload
      },
      setDescription: (state, action) => {
         state.content.experience.description = action.payload
      },
      // education
      setSchoolName: (state, action) => {
         state.content.education.schoolName = action.payload
      },
      setDegree: (state, action) => {
         state.content.education.degree = action.payload
      },
      setCityEducation: (state, action) => {
         state.content.education.cityEducation = action.payload
      },
      setStateEducation: (state, action) => {
         state.content.education.stateEducation = action.payload
      },
      setStudy: (state, action) => {
         state.content.education.study = action.payload
      },
      setStartDateEducation: (state, action) => {
         state.content.education.startDateEducation = action.payload
      },
      setExpirationDateEducation: (state, action) => {
         state.content.education.expirationDateEducation = action.payload
      },
      setDescriptionEducation: (state, action) => {
         state.content.education.descriptionEducation = action.payload
      },
   },
})

export const userActions = userSlice.actions
export default userSlice.reducer
