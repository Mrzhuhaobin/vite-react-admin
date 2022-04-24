import { createSlice } from '@reduxjs/toolkit'

export const user = createSlice({
  name: 'user',
  initialState: {
    isLogin: localStorage.getItem('isLogin') || false,
    value: 1,
    userName: localStorage.getItem('userName') || 'admin'
  },
  reducers: {
    setLogin: (state, action) => {
      console.log('test', action)
      state.isLogin = action.payload.isLogin;
      state.userName = action.payload.userName;
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