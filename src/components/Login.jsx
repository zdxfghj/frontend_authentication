import React, {useState} from 'react';
import axios from 'axios';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { toggleIsAuth } from '../features/counter/counterSlice';

const Login = () =>{
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const submit = async (e) =>{
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }

        try{
            const {data} = await axios.post("http://localhost:8000/token/", user)
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            dispatch(toggleIsAuth())
            navigate("/");
        }
        catch(error){
            console.error("error in token fetch: ", error.message)
        }
    }


    return(
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email</label>
              <input className="form-control mt-1" 
                placeholder="Enter Email" 
                name='email'  
                type='email' value={email}
                required 
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input name='password' 
                type="password"     
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                required
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" 
                 className="btn btn-primary">Submit</button>
            </div>
          </div>
       </form>
     </div>
    )
}

export default Login