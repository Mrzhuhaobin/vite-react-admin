import { configureStore } from '@reduxjs/toolkit'
import {user} from './model'

export default configureStore({
  reducer: {
    user
  }
})