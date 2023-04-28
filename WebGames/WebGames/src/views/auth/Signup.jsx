import {Link} from "react-router-dom";
import {createRef, useState} from "react";
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/ContextProvider';
import './auth.css'

export default function Signup(){
    const nameRef = createRef()
    const emailRef = createRef()
    const passwordRef = createRef()
    const passwordConfirmationRef = createRef()
    const {setUser, setToken} = useStateContext()
    const [errors, setErrors] = useState(null)
  
    const onSubmit = ev => {
      ev.preventDefault()
  
      const payload = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        password_confirmation: passwordConfirmationRef.current.value,
      }
      axiosClient.post('/signup', payload)
        .then(({data}) => {
          setUser(data.user)
          setToken(data.token);
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }
  



    return(
        
        <div className='auth_body'>
            <div className='form_container'>
                <form onSubmit={onSubmit}>
                    <h1 className='form_title'>Create Account</h1> 
                    <div className='input_group'>
                        <input className="form_input" ref={nameRef} type="text"  autoFocus  placeholder='full name'/>
                    </div>
                    <div className='input_group'>
                        <input className="form_input" ref={emailRef} type="email"  autoFocus  placeholder='email@example.com'/>
                    </div>
                    <div className='input_group'>
                        <input className="form_input" ref={passwordRef} type="password" autoFocus placeholder="password"/>
                    </div>
                    <div className='input_group'>
                        <input className="form_input" ref={passwordConfirmationRef} type="password" autoFocus placeholder="confirm password"/>
                    </div>

                    {errors &&
            <div className="alert">
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          }
                    <button className="auth_button" type="submit">continue</button>

    
                    <Link  to="/login" className="form_link"> already have an account? sign in</Link>
            
                </form>

            </div>
        </div>
    )
}