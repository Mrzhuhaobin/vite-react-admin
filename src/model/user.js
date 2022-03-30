import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    value: 1
  },
  reducers: {
    setLogin: (state, action) => {
      console.log('test', action)
      state.isLogin = action.payload
    },
    incrementByAmount: (state, action) => {
      console.log('add', action)
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLogin, incrementByAmount } = user.actions

export default user.reducer