/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  scans: [],
}

// ------------------------------------
// Slice
// ------------------------------------

const checkInSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    saveScanned: (state, { payload }) => {
      state.scans.push(payload)
    },
    removeItem: (state, { payload }) => {
      const { id } = payload
      state.scans = state.scans.filter((item) => item.id !== id)
    },
    checkOut: (state, { payload }) => {
      const { id } = payload
      const index = state.scans.findIndex((item) => item.id === id)

      state.scans[index] = { ...state.scans[index], checkedOut: true }
    },
  },
})

export const { action } = checkInSlice
export const { saveScanned, checkOut, removeItem } = checkInSlice.actions

export default checkInSlice.reducer
