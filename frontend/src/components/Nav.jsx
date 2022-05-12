import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

let sideBar = [
    {
        name:"Home"
    },
    {
        name:"Doctors"
    },
    {
        name:"Diagnose"
    },
]

  return (
    <div className='h-full w-full relative text-center flex align-center place-content-center center justify-center'>
          
          <div className="place-self-center flex flex-col">
          {
           sideBar.map((item, id) => {
               return (
                   <NavLink key={id} className="text-white mt-10 block" to={`/${item.name}`}>
                       {item.name}
                   </NavLink>
               )
           })
       }
                 </div>

       <div className="absolute bottom-0 h-20 items-center content-center text-center w-full bg-blue-800">
           <h2 className="text-white size:md self-center mt-5">
               Logout
           </h2>
       </div>
        </div>
  )
}

export default Nav