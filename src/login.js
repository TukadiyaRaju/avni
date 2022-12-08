import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./components/carousel";

function LogIn(){
    {document.querySelector("body").style.backgroundColor = "#153B2F"}

    const [user, setUser] = useState({
        email: "", password: ""
    });
    const navigate = useNavigate();

    let name, value;

    const handleInputs = (e) => {
        e.preventDefault();
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    const handleLogin = async () => {
        const {email, password} = user;
        const result = await fetch("/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await result.json();
        console.log(data);
        if(data.name){
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/home");
        } else {
            alert("Please enter correct details.");
        }
    }

    if(useMediaQuery({ query: '(min-width: 900px)' })) {
        return(
            <>
                <div className="wrap-container">
                    <Carousel />
    
                    <div className="sign-div">
                        <img className="start-logo" src="../../assets/logo/logo-white.png"></img>
    
                        <h1 className="heading">Log In</h1>
    
                        <p className="input-name">Email*</p>
                        <input className="start-input" placeholder="mail@website.com" name="email" value={user.email} onChange={handleInputs} />
    
                        <p className="input-name">Password*</p>
                        <input className="start-input" placeholder="Password" name="password" value={user.password} onChange={handleInputs} />
    
                        <br></br>
    
                        <button onClick={handleLogin} className="start-button">Log In</button>
    
                        <div className="or-div">
                            <div className="hr-line"></div>
                            <p>or Log In with Google</p>
                            <div className="hr-line"></div>
                        </div>
    
                        <Link to="/">
                            <button className="google-button">
                                <div>
                                    <img className="google-icon" src="../../assets/icons/google.png"></img>
                                    Log In with Google
                                </div>
                            </button>
                        </Link>
    
                        <p className="start-bottom-text">Don't have an account? <Link className="bottom-link" to="/signup">Sign up</Link></p>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="sign-div">
                <img className="start-logo" src="../../assets/logo/logo-white.png"></img>

                <h1 className="heading">Log In</h1>

                <p className="input-name">Email*</p>
                <input className="start-input" placeholder="mail@website.com" name="email" value={user.email} onChange={handleInputs} />

                <p className="input-name">Password*</p>
                <input className="start-input" placeholder="Password" name="password" value={user.password} onChange={handleInputs} />

                <br></br>

                <button onClick={handleLogin} className="start-button">Log In</button>

                <div className="or-div">
                    <div className="hr-line"></div>
                    <p>or Log In with Google</p>
                    <div className="hr-line"></div>
                </div>

                <Link to="/">
                    <button className="google-button">
                        <div>
                            <img className="google-icon" src="../../assets/icons/google.png"></img>
                            Log In with Google
                        </div>
                    </button>
                </Link>

                <p className="start-bottom-text">Don't have an account? <Link className="bottom-link" to="/signup">Sign up</Link></p>
            </div>
        )
    }
    
}

export default LogIn;