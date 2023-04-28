import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import Navbar from "./navbar/Navbar";
import axiosClient from "../axios-client.js";
import {useEffect} from "react";

import instagram from "../assets/imgs/instagram.png"
import facebook from "../assets/imgs/facebook.png"
import youtube from "../assets/imgs/youtube.png"
import tiktok from "../assets/imgs/tiktok.png"

export default function DefaultLayout (){
    const {user, token, setUser, setToken} = useStateContext();

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
            <footer>
             <div>
               <h4>get in touch</h4>
               <p>call us on +11 743-373-3443 or email            us at randomaccount@gmail.com</p>
             </div>
             <div>
               <h4>Social media links</h4>
               <a href="3">

                 <img width='30"' src={instagram} alt="instagram" />
               </a>
               <a href="#">
                  <img width='30"' src={facebook} alt="facebook" />
                </a>
                <a href="#">
                 <img width='30"' src={youtube} alt="youtube" />
               </a>
                <a href="#">
                  <img width='30"' src={tiktok} alt="tiktok" />
               </a>
             </div>
            </footer>

            
        </div>

    )
}