import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../redux/TodoSlice';


function Header() {

  const name = sessionStorage.getItem('name');
  const dispatch = useDispatch();
  const mode=useSelector(state=>state.todos.darkmode)
  const handleClick=() => {
    dispatch(changeMode(!mode))
  }
  console.log(mode)
  return (
    <div className=' bg-bpink w-screen h-24 flex justify-between'>
        <div>
        {name}
        </div>
        <div>
          <div>
            <button className=' mt-2 mr-2 p-3 border-2 rounded-2xl bg-tgreen text-tblue font-semibold hover:border-4' onClick={handleClick}> Dark Mode On</button>
          </div>
        </div>
    </div>
  )
}

export default Header