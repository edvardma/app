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
    certificateHospitalName: 'Hospital Pulau Piang',
    dose1Date: '2021/1/1',
    dose2Date: '2021/1/1',
    pcrDate: '2021/1/1',
    dose1Batch: 'dose1Batch',
    dose2Batch: 'dose2Batch',
    vaccineManufacturer: 'COVID-19 Vaccine AstraZeneca Solution for Injection',
    vaccineFaciality: 'World Trade Centere Kuala Lumpur (Station 3)',
  },
  profileRefreshDate: '2021/1/1',
  activeRouteStack: 'main',
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
      state.user.passportNumber = payload.passportNumber
      state.user.certificateHospitalName = payload.certificateHospitalName
      state.user.dose1Date = payload.dose1Date
      state.user.dose2Date = payload.dose2Date
      state.user.vaccineManufacturer = payload.vaccineManufacturer
      state.user.vaccineFaciality = payload.vaccineFaciality
      state.user.dose1Batch = payload.dose1Batch
      state.user.dose2Batch = payload.dose2Batch
      state.user.pcrDate = payload.pcrDate
    },
    setRouteStack: (state, { payload }) => {
      state.activeRouteStack = payload
    },
    updateProfileRefreshDate: (state) => {
      state.profileRefreshDate = new Date()
    },
  },
})

export const { action } = appSlice
export const { setupUser, setRouteStack, updateProfileRefreshDate } = appSlice.actions

export default appSlice.reducer
