import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggleIsAuth: (state) => {
      state.isAuth = !state.isAuth
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { toggleIsAuth} = counterSlice.actions

export default counterSlice.reducer