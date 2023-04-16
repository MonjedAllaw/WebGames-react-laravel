
import {Link} from 'react-router-dom'

import './auth.css'


const onSubmit= (ev)=>{
    ev.preventDefault()
}

export default function Login(){
    return(
        <div className='auth_body'>
            <div className='form_container'>
                <form onSubmit={onSubmit}>
                    <h1 className='form_title'>Login</h1> 
                    <div className='input_group'>
                        <input type="text"  autoFocus  placeholder='email@example.com'/>
                    </div>
                    <div className='input_group'>
                        <input type="password" autoFocus placeholder="password"/>
                    </div>
                    <button  type="submit">continue</button>

                    <a href="#" className="form_link">forgot your password</a> 
                    <Link  to="/signup" className="form_link"> Don't have an account? Create account </Link>
            
                </form>

            </div>
        </div>
    )
}