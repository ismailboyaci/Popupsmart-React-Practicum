import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState();
    const navigate=useNavigate();
    const handleSubmit=(e) => {
        e.preventDefault();
        if(name!==undefined|""){
            sessionStorage.setItem('name',name)
            navigate('/todos')
        }
    }
  return (
   <div className="grid h-screen">
    <div className="columns-2 gap-4 flex justify-center items-center flex-col md:flex-row ">
        <div className=' bg-todo bg-no-repeat bg-center w-96 h-96 rounded-l-2xl'></div>
        <div className='bg-bpink w-96 h-96 rounded-r-2xl flex flex-col items-center'>
            <p className=' text-2xl font-bold text-tblue drop-shadow-2xl mt-24 ' > UserName</p>
            <form className='flex flex-col ' onSubmit={handleSubmit}>
                <input type="text" placeholder='enter username' className='mt-4 border-2 rounded-xl text-center border-tgreen focus:outline-none focus:border-4 text-tblue'
                onChange={(e)=>setName(e.target.value)}/>
                <button type='submit' className='mt-4 border-2 rounded-2xl bg-tgreen text-tblue font-semibold hover:border-4'>Log In</button>
            </form>
        </div>
    </div>
   </div>
  )
}

export default Login