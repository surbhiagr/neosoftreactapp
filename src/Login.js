import {useState} from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Login(props){
    
    var [error, setError] = useState()
    var [user, setUser] = useState({})
     let getEmail =(event)=>{
        setUser({email:event.target.value, password : user.password})
        user.email = event.target.value
    }
    let getPassword = (event)=>{
         setUser({password:event.target.value, email: user.email})
        user.password = event.target.value
    }
     let login = function(){
         if(user.email == 'test@gmail.com' && user.password == "test"){
             setError('Success')
             props.informlogin("Surbhi")
         }
         else{
             setError('No Success')
         }
       console.log("User is trying to login",user)
       
      let loginapiurl = "https://apibyashu.herokuapp.com/api/login"
           axios({
               url:loginapiurl,
               method: "post",
               data: user
          }).then((response)=>{
              console.log("Response data login API", response.data)
            },(error)=>{
                console.log("Error login API",error)
            })
    }
    return(
        <div>
             <div style={{width:"50%" , margin:"auto"}}>
                <div className="form-group">
                    <label>Email</label>
                <input type="email" class="form-control" onChange={getEmail}></input>
                {user.email}
                </div>
                
                <div className="form-group">
                <label>Password</label>
                <input type="password" class="form-control" onChange={getPassword}></input>
                {user.password}
                </div>
                <div style={{color:"red"}}>
                    {error}
                </div>
                <div style = {{float: "right"}}>
                    <Link to = "/forgot">Forgot Password? </Link>
                </div>
                <div>
                    <Link to = "/signup">New user? Click Here </Link>
                </div>
              <button className="btn btn-primary" onClick={login}>Login</button>
            </div>
            
        </div>
    )
}

export default Login