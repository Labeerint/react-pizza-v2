import { configureStore } from '@reduxjs/toolkit'
import sortReducer from './slice/sortSlice'

export const store = configureStore({
    reducer: {sortReducer},
})