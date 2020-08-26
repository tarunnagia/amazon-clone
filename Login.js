import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import {auth} from './firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event =>{
        event.preventDefault(); // prevent our page from refresh
        // login logic
        auth 
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                //redirect to homepage
                history.push("/");
            })
            .catch((e)=> alert(e.message));
    };

    const register = event =>{
        event.preventDefault(); // prevent our page from refresh
        // register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            //created a user and logged in, redirect to the homepage
            history.push("/");
        })
        .catch((e)=> alert(e.message));
    };
    return (
        <div className ="login">
                <Link to="/">
                <img 
                    className="login__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={ email } onChange={ event=>setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={ password } onChange={ event=>setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            </div>
            <p>New to Amazon?</p>
            <button onClick={register} type="submit">Create your Amazon account</button>

        </div>
    );
}

export default Login
