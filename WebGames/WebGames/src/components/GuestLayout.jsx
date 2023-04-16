import { Outlet,Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Navbar from "./navbar/Navbar";
export default function GuestLayout(){
    const{user,token}=useStateContext();
    
    if(token){
        return <Navigate to="/"/>
    }
    return (
        <div>
        <Navbar isLoggedIn={false}/> 
        <main><Outlet/></main>
        
        </div>
        
    )
}