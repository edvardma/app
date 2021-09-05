import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  categories: [
    { label: 'test', active: true },
    { label: 'test', active: false },
    { label: 'test', active: false },
    { label: 'test', active: false },
    { label: 'test', active: false },
    { label: 'test', active: false },
  ],
  statics: [
    {
      title: 'test',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sed magna vel molestie. Donec metus dolor, tempor at sem ac, posuere pellentesque augue. Duis volutpat fermentum mi, vel convallis nisl sollicitudin vitae. Morbi rhoncus, purus eu maximus semper, libero lacus vestibulum mauris',
    },
    {
      title: 'test',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sed magna vel molestie. Donec metus dolor, tempor at sem ac, posuere pellentesque augue. Duis volutpat fermentum mi, vel convallis nisl sollicitudin vitae. Morbi rhoncus, purus eu maximus semper, libero lacus vestibulum mauris',
    },
    {
      title: 'test',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sed magna vel molestie. Donec metus dolor, tempor at sem ac, posuere pellentesque augue. Duis volutpat fermentum mi, vel convallis nisl sollicitudin vitae. Morbi rhoncus, purus eu maximus semper, libero lacus vestibulum mauris',
    },
    {
      title: 'test',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sed magna vel molestie. Donec metus dolor, tempor at sem ac, posuere pellentesque augue. Duis volutpat fermentum mi, vel convallis nisl sollicitudin vitae. Morbi rhoncus, purus eu maximus semper, libero lacus vestibulum mauris',
    },
    {
      title: 'test',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sed magna vel molestie. Donec metus dolor, tempor at sem ac, posuere pellentesque augue. Duis volutpat fermentum mi, vel convallis nisl sollicitudin vitae. Morbi rhoncus, purus eu maximus semper, libero lacus vestibulum mauris',
    },
  ],
}

// ------------------------------------
// Slice
// ------------------------------------

const staticsSlice = createSlice({
  name: 'statics',
  initialState,
  reducers: {
    setActiveCategory: (state, { payload }) => {
      const activeIndex = state.categories.findIndex((cat) => !!cat.active)
      state.categories[activeIndex].active = false
      state.categories[payload].active = true
    },
  },
})

export const { actions } = staticsSlice
export const { setActiveCategory } = staticsSlice.actions

export default staticsSlice.reducer
