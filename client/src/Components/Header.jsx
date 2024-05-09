import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='bg-slate-300'>
    <div className='flex justify-between  mx-auto max-w-6xl items-center p-4'>
    <Link to={'/'}> <h1 className='font-bold'>Auth App</h1></Link>
       
        <ul className='gap-4 flex'>
        <Link to={'/'}> <li>Home</li></Link>
           
            <Link to={'/signin'}><li>Sign In</li></Link>
            
        </ul>
    </div>

    </div>
  )
}
