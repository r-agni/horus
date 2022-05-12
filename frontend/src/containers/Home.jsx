import React,{useState} from 'react'
import Nav from '../components/Nav'
import {GiHamburgerMenu} from 'react-icons/gi'

import PageRouter from './PageRouter'
import LeftSidebar from '../components/LeftSidebar'

const Home = ({user}) => {
    const [toggle, settoggle] = useState(false)
    
  return (
    <div>
        <div className="md:flex hidden relative">
            <div className="md:w-1/6 lg:w-1/12 min-h-screen bg-blue-500">
                <Nav/>
            </div>
            <div className="md:w-3/6 lg:w-8/12 min-h-screen h-full bg-gray-100">
            <PageRouter user={user} />
            </div>
            <div className='hidden md:flex md:w-1/6 lg:w-2/12'>
            <LeftSidebar/>
            </div>
        </div>

        <div className="flex md:hidden w-full h-100 bg-blue-500">
                <GiHamburgerMenu onClick={() => settoggle(!toggle)} style={{margin:'1rem'}} size={24}/>
        </div>

        {
            toggle && (
                <div className="w-3/4 h-screen bg-blue-500 absolute top-15 left-0 animate-slide-in ease-in-out">
                    <Nav/>
                </div>
            )
        }

        <div className="md:hidden flex w-screen min-h-screen  h-full bg-gray-100">
        <PageRouter/>
        </div>
       
    </div>
  )
}

export default Home