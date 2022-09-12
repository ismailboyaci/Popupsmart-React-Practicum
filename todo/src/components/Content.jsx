import React, { useEffect, useState } from 'react'
/* import TodoService from '../services/TodoService' */
import Todo from './Todo'
import axios from 'axios'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveTodos,updateTodo,deleteTodo,createTodo } from '../redux/TodoSlice'


function Content() {
  const url= 'https://6311e8ff19eb631f9d7b7f94.mockapi.io'
  const [task, setTask]= useState()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(retrieveTodos())
  },[dispatch])
  const todos = useSelector(state=>state.todos.todos)
  


 
/*  useEffect(() => {
   axios.get(url+'/todos')
   .then((res)=>{
    setTodos(res.data)
   })
 }, []) */

 const changeTodoStatus = (updatedState) => {
  /* axios.put(url+'/todos/'+updatedState.id,updatedState)
      .then(res => {
        setTodos(prevState => prevState.map(todo => (todo.id === res.data.id ? {...todo, isCompleted: res.data.isCompleted} : todo)))
      }) */
      dispatch(updateTodo(updatedState.id, updatedState))
};
const deleteTodo=(id)=>{
  axios.delete(url+'/todos/'+id)
  .then(res=>{
    const updatedTodos=todos.filter(todo=>todo.id !==id)
    /* setTodos(updatedTodos) */
  })
}
const addTodo=(e)=>{
  e.preventDefault();
  const data={
    "content":task,
    "isCompleted":false
  }
  /* axios.post(url+'/todos/',data)
  .then(res=>{
    setTodos(prevState=>[...prevState,res.data])
  }) */
  dispatch(createTodo(data));
  setTask("")
}
  
  

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='flex flex-col justify-center items-center mt-2'>
        <form onSubmit={addTodo} className=" flex justify-center w-1/2 rounded-xl ">
          <input type="text" placeholder="What needs to be done?" onChange={e=>setTask(e.target.value)} value={task || ''} className=" border-tgreen border-2 rounded-xl px-2"/>
          <button className="px-2 py-1 border-2 rounded-2xl bg-tgreen text-tblue font-semibold hover:border-4">Add Todo</button>
        </form>
      </div>
      {todos.length!==0?(

      <div className="flex flex-col justify-center items-center">
        {todos.filter((todo)=>todo.isCompleted===false).map((todo,index)=>(
          <Todo key={index} todo={todo} 
          changeTodoStatus = {(updatedState) => changeTodoStatus(updatedState)} 
          deleteTodo={(id)=>deleteTodo(id)}/>
        ))}
      <p>completed</p>
      {todos.filter((todo)=>todo.isCompleted===true).map((todo,index)=>(
          <Todo key={index} todo={todo} 
          changeTodoStatus = {(updatedState) => changeTodoStatus(updatedState)}
          deleteTodo={(id)=>deleteTodo(id)}/>
        ))}
      </div>
      ):(
        <div>
          <h2>yuklenıyor..</h2>
        </div>
       )}
    </div>
  )
}

export default Content