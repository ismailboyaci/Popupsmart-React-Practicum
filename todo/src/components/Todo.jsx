import React from 'react'
import { useState, useEffect } from 'react'

function Todo(props) {
  const [doneTodo, setDoneTodo] = useState(props.todo.isCompleted)
  useEffect(() => {
    setDoneTodo(props.todo.isCompleted)
}, [props.todo.isCompleted])
  return (
    <div className='flex justify-between items-center border-2 rounded-xl w-1/4 mt-3 h-8'>
        <div>
            <input type="checkbox" className='ml-2' checked={doneTodo} onChange={() => props.changeTodoStatus({...props.todo, isCompleted:!doneTodo})} />
        </div>
        <div>
            <p className={`${doneTodo ?"line-through":""}`}>{props.todo.content}</p>
        </div>
        <div>
            <button className='mr-2 hover:text-red-500'>
            <i className="bi bi-pencil"></i>
            </button>
            <button className='mr-2 hover:text-red-500' onClick={()=>props.deleteTodo(props.todo.id)}>
            <i className="bi bi-trash"></i>
            </button>
        </div>
    </div>
  )
}

export default Todo