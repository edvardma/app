/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  user: {
    name: 'Demo User',
    status: 'Low Risk No Symptoms',
    email: 'demo@demo.com',
  },
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
})

export const { action } = appSlice
// export const {} = appSlice.actions

export default appSlice.reducer
