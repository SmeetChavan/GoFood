import {Link , useNavigate} from 'react-router-dom';
import { useState } from "react";

function Login(){

    const navigate = useNavigate();

    const [email , setEmail] = useState('');
    const [password , setPass] = useState('');

    const handleSubmit = async (event) => {

        event.preventDefault();

        const user = {email , password};

        const response = await fetch('/loginuser' , {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(user)
        })

        const json = await response.json();

        setEmail('');
        setPass('');

        if(!response.ok){
            return alert("Invalid credentials!");
        }
        else{
            alert("Login successful!");
            localStorage.setItem("authToken" , json.authToken);
            localStorage.setItem("email" , json.email);
            localStorage.setItem("name" , json.name);
            navigate('/');
        }

    }

    return (

        <>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-4">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control focus:ring-4"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control focus:outline-none focus:ring-4"
                            id="pass"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>{setPass(e.target.value)}}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    <Link to='/register' id='login_signup'>New user?</Link>
                </form>
            </div>
        </>
        
    );
}

export default Login;