import React,{ createContext, useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Context = createContext()
export const UserState = ({children}) => {
  const Navigator = useNavigate()
    const [user, setuser] = useState({})
    const server = 'http://71.204.171.183:89'
    const login = async(name, email, password) => {
    
      const resp = await fetch(`${server}/api/v1/user/create?password=${password}&name=${name}&email=${email}`, {method:'POST'})
  
      const data = await resp.json()
  
      console.log(data)
      setuser(data)
      Navigator('/')
    }
    return (
        <Context.Provider value={{
          user,login
        }} >
            {children}
        </Context.Provider>
)
}

export const useStateContext = () => useContext(Context)