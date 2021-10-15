import { createSlice } from '@reduxjs/toolkit'

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
        title: 'test',
        description: 'Lorem ipsum dolor sit amet, culum mauris',
        number: '0.86',
        buttonTitle: 'x',
      },
      {
        type: 'card',
        color: '#fc032c',
        title: 'test',
        description: 'Lorem ipsum dolor sit amet, culum mauris',
        number: '2,332,221',
      },
      {
        type: 'card',
        color: '#08c908',
        title: 'test',
        description: 'Lorem ipsum dolor sit amet, culum mauris',
        number: '2,184,710',
      },
      {
        type: 'card',
        color: '#000000',
        title: 'test',
        description: 'Lorem ipsum dolor sit amet, culum mauris',
        number: '2,332,221',
      },
      {
        type: 'card',
        color: '#e39000',
        title: 'test',
        description: 'Lorem ipsum dolor sit amet, culum mauris',
        number: '2,184,710',
      },
    ],
    states: [],
    global: [],
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
