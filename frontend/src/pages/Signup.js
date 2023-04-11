import { useState } from 'react';
import {Link} from 'react-router-dom';

function Signup() {

    const [name , setName] = useState('');
    const [mobile , setMobile] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [conPass , setConPass] = useState('');


    const handleSubmit = async (event) => {

        event.preventDefault();

        const user = {name , email , mobile , password};

        const response = await fetch('/register' , {
            method: "POST",
            headers:{
                'Content-type' : 'application/json',
            },
            body: JSON.stringify(user)
        })

        if(!response.ok){
            alert("Failed!");
        }
        else{
            alert("Registered Successfully!");
        }

        setName('');
        setEmail('');
        setMobile('');
        setPassword('');
        setConPass('');
    }

    const changeName = (event) => {
        setName(event.target.value);
    }
    const changeEmail = (event) => {
        setEmail(event.target.value);
    }
    const changePassword = (event) => {
        setPassword(event.target.value);
    }
    const changeConPass = (event) => {
        setConPass(event.target.value);
    }
    const changeMobile = (event) => {
        setMobile(event.target.value);
    }

    return (
        <>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-4">
                        <label htmlFor="exampleInputName1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            aria-describedby="emailHelp"
                            placeholder="Enter name"
                            value={name}
                            onChange={changeName}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputName1">Phone</label>
                        <input
                            type="Number"
                            className="form-control"
                            id="phone"
                            aria-describedby="emailHelp"
                            placeholder="Enter your number"
                            value={mobile}
                            onChange={changeMobile}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={email}
                            onChange={changeEmail}
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pass"
                            placeholder="Password"
                            value={password}
                            onChange={changePassword}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id={(password !== conPass) ? "error" : "confirm"}
                            value={conPass}
                            placeholder="Password"
                            onChange={changeConPass}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                    <Link to='/login' id='login_signup'>Already a user?</Link>
                </form>
            </div>
        </>
    );
}

export default Signup;