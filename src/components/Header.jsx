import React, { useState } from 'react'
import {Link  } from 'react-router'
import { SiRiotgames } from "react-icons/si";
function Header() {
  const [active, setActive]=useState("")
  const navLink=[
    {name:"Home", path:"/"},
    {name:"About", path:"/about"},
    {name:"Contact", path:"/contact"},
    {name:"Services", path:"/services"},
  ]
  return (
    <div >
      <nav className='flex justify-between m-0 bg-amber-200 p-2 items-center '>
        <SiRiotgames className='h-10 w-10 ml-3  mb-1' />
        <ul className='flex gap-20 p-2 '>
            {
              navLink.map((link)=>(
                <li key={link.name} className={`cursor-pointer hover:text-gray-400 ${active===link.name? 'text-white font-bold underline':''}`}onClick={()=>setActive (link.name)} > 
                <Link to={link.path}>{link.name}</Link>
                </li>
              ))
            }
        </ul>
        <div className='mr-4  '>
        <button className='pr-5 pl-6 px-1 py-1 border-2 rounded-2xl'> <Link to={"/login"}>Login</Link></button>
        <button className='pr-5 pl-6 px-1 py-1 border-2 ml-2 rounded-2xl'>Sign up</button>
        </div>
      </nav>
    </div>
  )
}

export default Header
