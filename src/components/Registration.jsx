import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
   

   const Registration = () =>{
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) =>{
        e.preventDefault();
        const user = {
            name: name,
            email: email,
            password: password
        }

        try{
          console.log(user)
            const {data} = await axios.post("http://localhost:8000/user/register", user)
            console.log(data)
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
            <h3 className="Auth-form-title">Registretion</h3>
            <div className="form-group mt-3">
              <label>Name</label>
              <input className="form-control mt-1" 
                placeholder="Enter Name" 
                name='name'  
                type='name' value={name}
                required 
                onChange={e => setName(e.target.value)}/>
            </div>
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

   export default Registration;