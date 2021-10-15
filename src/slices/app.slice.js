/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  user: {
    name: 'Demo User',
    status: 'happy',
    email: 'demo@demo.com',
    state: 'demo@demo.com',
    passportNumber: '6487941948',
  },
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setupUser: (state, { payload }) => {
      state.user.name = payload.name
      state.user.status = payload.status
      state.user.email = payload.email
      state.user.state = payload.state
      state.user.passportpassNoNumber = payload.passportpassNoNumber
    },
  },
})

export const { action } = appSlice
export const { setupUser } = appSlice.actions

export default appSlice.reducer
