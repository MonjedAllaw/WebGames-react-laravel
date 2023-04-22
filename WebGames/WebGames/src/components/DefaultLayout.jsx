import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import '../assets/global.css'
import Navbar from "./navbar/Navbar";
import axiosClient from "../axios-client.js";
import {useEffect} from "react";

export default function DefaultLayout (){
    const {user, token, setUser, setToken, notification} = useStateContext();

    if (!token) {
      return <Navigate to="/login"/>
    }
  
    const onLogout = ev => {
      ev.preventDefault()
  
      axiosClient.post('/logout')
        .then(() => {
          setUser({})
          setToken(null)
        })
    }
  
    useEffect(() => {
      axiosClient.get('/user')
        .then(({data}) => {
           setUser(data)
        })
    }, [])
  
    
    return(
        <div id="defaultLayout">
            <Navbar isLoggedIn={true} logoutAction={onLogout} userName={user.name}/>
            <main>
           
                <Outlet/>
            </main>
            
        </div>

    )
}