import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import request from '@/service/request';

export const doLogin = createAsyncThunk(
  'user/doLogin',
  async (params) => {
    const res = await request({
      method: 'post',
      url: '/api/login',
      data: params
    })
    return res
  }

)

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
  },
  extraReducers: {
    [doLogin.fulfilled]: (state, action) => {
      console.log('action', action.payload)
      state.isLogin = true;
      state.userName = action.payload.userName;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLogin, incrementByAmount } = user.actions

export default user.reducer