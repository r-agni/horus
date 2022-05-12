import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Doctors from "../components/Doctors";
import Diagnose from "../components/Diagnose";
import History from "../components/History";

import React from 'react'

const Router = ({user}) => {
  return (
    <div>
        <Routes>
        <Route path='/*' element={<Hero/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/diagnose' element={<Diagnose user={user} />}/>
        <Route path='/History' element={<History/>}/>
        </Routes>
    </div>
  )
}

export default Router