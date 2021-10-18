/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  scans: [],
  history: [],
}

// ------------------------------------
// Slice
// ------------------------------------

const checkInSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    saveScanned: (state, { payload }) => {
      state.scans.unshift(payload)
      state.history.unshift({ ...payload, type: 'checkIn' })
    },
    removeItem: (state, { payload }) => {
      const { id } = payload
      state.scans = state.scans.filter((item) => item.id !== id)
    },
    checkOut: (state, { payload }) => {
      const { id } = payload
      const index = state.scans.findIndex((item) => item.id === id)

      state.scans[index] = {
        ...state.scans[index],
        checkedOut: true,
        checkOutDate: new Date(),
      }

      state.history.unshift({
        ...payload,
        type: 'checkInOut',
        date: new Date(),
      })
    },
  },
})

export const { action } = checkInSlice
export const { saveScanned, checkOut, removeItem } = checkInSlice.actions

export default checkInSlice.reducer
