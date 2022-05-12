import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home' 
import Login from './components/Login'
import { UserState } from './context/userContext'

const App = () => {
  const [user, setuser] = useState({})

  useEffect(() => {
    setuser(user)
  }, [])
  

  return (

    <BrowserRouter>
        <UserState>
    <Routes>
      <Route path='/*' element={<Home user={user} />}/>
      <Route path='/Login' element={<Login setuser={setuser} />}/>
    </Routes>
    </UserState>
    </BrowserRouter>
  )
}

export default App