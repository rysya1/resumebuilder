import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import skillSlice from '../features/skill/skillSlice'
import toggleSlice from '../features/toggle/toggleSlice'

export const store = configureStore({
   reducer: {
      user: userSlice,
      skills: skillSlice,
      toggle:toggleSlice
   },
})
