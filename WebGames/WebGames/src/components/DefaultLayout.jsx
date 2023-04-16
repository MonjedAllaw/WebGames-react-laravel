import { Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import '../assets/global.css'
import Navbar from "./navbar/Navbar";

export default function DefaultLayout (){
    const{user,token}=useStateContext();
    
    if(!token){
        return <Navigate to="/login"/>
    }
    
    return(
        <div id="defaultLayout">
            <Navbar isLoggedIn={true}/>
            <main>
                <Outlet/>
            </main>
            
        </div>

    )
}