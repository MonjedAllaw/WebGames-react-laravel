import {Link} from 'react-router-dom'

import './auth.css'
const onSubmit= (ev)=>{
    ev.preventDefault()
}
export default function Signup(){
    return(
        
        <div className='auth_body'>
            <div className='form_container'>
                <form onSubmit={onSubmit}>
                    <h1 className='form_title'>Create Account</h1> 
                    <div className='input_group'>
                        <input type="text"  autoFocus  placeholder='email@example.com'/>
                    </div>
                    <div className='input_group'>
                        <input type="password" autoFocus placeholder="password"/>
                    </div>
                    <div className='input_group'>
                        <input type="password" autoFocus placeholder="confirm password"/>
                    </div>
                    <button  type="submit">continue</button>

    
                    <Link  to="/login" className="form_link"> already have an account? sign in</Link>
            
                </form>

            </div>
        </div>
    )
}