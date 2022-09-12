import { configureStore } from '@reduxjs/toolkit'
import  TodoReducer  from './TodoSlice'
const reducer ={
    todos:TodoReducer
}
const store = configureStore({
    reducer:reducer,
    devTools:true
})
export default store