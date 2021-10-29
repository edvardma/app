import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  categories: [
    { label: 'COVID-19 Update', id: 'updates' },
    { label: 'COVID-19 States', id: 'states' },
    { label: 'COVID-19 Global Updates', id: 'global' },
  ],
  statics: {
    updates: [
      {
        type: 'card',
        color: '#1324d6',
        title: 'Nilai R (R Value)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '0.87',
      },
      {
        type: 'card',
        color: '#fc032c',
        title: 'Jumlah kes Keseluruhan (Total Confirmed Cases)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '2,332,221',
        buttonTitle: '+7420 Hari Ini (Today)',
      },
      {
        type: 'card',
        color: '#08c908',
        title: 'Jumlah kes Sembuh (Total Recovered)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '2,184,710',
        buttonTitle: '+11413 Hari Ini (Today)',
      },
      {
        type: 'card',
        color: '#000000',
        title: 'Jumlah Kematian (Total Death)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '2,332,221',
        buttonTitle: '+89 Hari Ini (Today)',
      },
      {
        type: 'card',
        color: '#e39000',
        title: 'Kes Aktif (Active Cases)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        buttonTitle: '+4082 Hari Ini (Today)',
      },
    ],
    states: [
      {
        type: 'card',
        color: '#fc032c',
        title: 'Jumlah kes Keseluruhan (Total Confirmed Cases)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '2,332,221',
        buttonTitle: '+7420 Hari Ini (Today)',
      },
      {
        type: 'card',
        color: '#000000',
        title: 'Jumlah Kematian (Total Death)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '2,332,221',
        buttonTitle: '+89 Hari Ini (Today)',
      },
      {
        type: 'card',
        color: '#08c908',
        title: 'Jumlah kes Sembuh (Total Recovered)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '2,184,710',
        buttonTitle: '+11413 Hari Ini (Today)',
      },
    ],
    global: [
      {
        type: 'card',
        color: '#000000',
        title: 'Jumlah Kematian (Total Death)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '2,332,221',
        buttonTitle: '+89 Hari Ini (Today)',
      },
      {
        type: 'card',
        color: '#08c908',
        title: 'Jumlah kes Sembuh (Total Recovered)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        number: '2,184,710',
        buttonTitle: '+11413 Hari Ini (Today)',
      },

      {
        type: 'card',
        color: '#e39000',
        title: 'Kes Aktif (Active Cases)',
        description: `Setakat ${moment().format('MMMM Do YYYY LTS')}`,
        buttonTitle: '+4082 Hari Ini (Today)',
      },
    ],
  },
}

// ------------------------------------
// Slice
// ------------------------------------

const staticsSlice = createSlice({
  name: 'statics',
  initialState,
  reducers: {},
})

export const { actions } = staticsSlice
// export const {  } = staticsSlice.actions

export default staticsSlice.reducer
