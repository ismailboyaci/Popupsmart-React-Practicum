import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import  TodoService  from '../services/TodoService'

export const createTodo=createAsyncThunk(
    "todos/create",
    async({content})=>{
        const res = await TodoService.create({content});
        return res.data;
    }
);
export const retrieveTodos = createAsyncThunk(
    "todos/retrieve",
    async () => {
      const res = await TodoService.getAll();
      return res.data;
    }
  );
export const updateTodo = createAsyncThunk(
    "todos/update",
    async ({id,data}) =>{
        const res = await TodoService.update(id,data);
        return res.data;
    }
);
export const deleteTodos = createAsyncThunk(
    "todos/delete",
    async ({id})=>{
         await TodoService.remove(id);
        return ({id})
    }
);
export const TodoSlice = createSlice({
    name: "todos",
    initialState: {
        todos:[],
        darkmode:false
    },
    reducers: {
        changeMode:(state,action) =>{
            state.darkmode=action.payload
        }
    },
    extraReducers:{
        [createTodo.fulfilled]: (state, action) => {
          return{
            ...state,
            todos: [...state.todos, action.payload],
          }
          },
          [retrieveTodos.fulfilled]: (state, action) => {
            return {
              ...state,
              todos: action.payload,
            };
          },
          [updateTodo.fulfilled]: (state, action) => {
            const index = state.todos.findIndex(tutorial => tutorial.id === action.payload.id);
            state.todos[index] = {
              ...state.todos[index],
              ...action.payload,
            };
            return state
          },
          [deleteTodos.fulfilled]: (state, action) => {
            let index = state.todos.findIndex(({ id }) => id === action.payload.id);
            state.todos.splice(index, 1)
          }
    }
})

export const {changeMode} =TodoSlice.actions
const { reducer } = TodoSlice;
export default reducer;