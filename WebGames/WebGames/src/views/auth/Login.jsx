import {Link} from "react-router-dom";
import axiosClient from '../../axios-client';
import {createRef} from "react";
import { useStateContext } from '../../contexts/ContextProvider';
import { useState } from "react";
import './auth.css'



export default function Login(){
    const emailRef = createRef()
    const passwordRef = createRef()
    const { setUser, setToken } = useStateContext()
    const [message, setMessage] = useState(null)
  
    const onSubmit = ev => {
      ev.preventDefault()
  
      const payload = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
      axiosClient.post('/login', payload)
        .then(({data}) => {
          setUser(data.user)
          setToken(data.token);
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setMessage(response.data.message)
          }
        })
    }
    
    return(
        
        <div className='auth_body'>
            <div className='form_container'>
                <form onSubmit={onSubmit}>
                    <h1 className='form_title'>Login</h1> 
                    <div className='input_group'>
                        <input className="form_input" ref={emailRef} type="text"  autoFocus  placeholder='email@example.com'/>
                    </div>
                    <div className='input_group'>
                        <input className="form_input" ref={passwordRef} type="password" autoFocus placeholder="password"/>
                    </div>
                    
                    {message &&
            <div className="alert">
              <p>{message}</p>
            </div>
          }

                    <button className="auth_button" type="submit">continue</button>

                    <a href="#" className="form_link">forgot your password</a> 
                   
            
                </form>

            </div>
        </div>
    )
}