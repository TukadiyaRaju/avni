import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { json, Link, useNavigate } from "react-router-dom";
import Carousel from "./components/carousel";


function SignUp(){
    {document.querySelector("body").style.backgroundColor = "#153B2F"}

    const [user, setUser] = useState({
        name: "", email: "", password: ""
    });
    const navigate = useNavigate();

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    const collectData = async (e) => {
        e.preventDefault();
        const {name, email, password} = user;

        if(name === "" || email === "" || password === "") {
            window.alert("Field cannot be empty.");
        } else {
            const result = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            });
            const data = await result.json();
    
            if(data.status === 422 || !data) {
                window.alert("Invalid registration.");
                console.log("Invalid registration.");
            } else {
                localStorage.setItem("user", JSON.stringify(data));
                navigate("/home")
            }
        }
    }

    if(useMediaQuery({ query: '(min-width: 900px)' })){    
        return(
            <>
                <div className="wrap-container">
                    <Carousel />
                    
                    <div className="sign-div"> 
                        <img className="start-logo" src="../../assets/logo/logo-white.png"></img>

                        <h1 className="heading">Sign Up</h1>

                        <form method="POST">
                            <p className="input-name">Name*</p>
                            <input type="text" className="start-input" placeholder="Name" name="name" value={user.name} onChange={handleInputs} />

                            <p className="input-name">Email*</p>
                            <input type="text" className="start-input" placeholder="mail@website.com" name="email" value={user.email} onChange={handleInputs} />

                            <p className="input-name">Password*</p>
                            <input type="password" className="start-input" placeholder="Min. 8 character" name="password" value={user.password} onChange={handleInputs} />

                            <br></br>

                            <button onClick={collectData} type="submit" className="start-button">Sign up</button>
                        </form>
                        

                        <div className="or-div">
                            <div className="hr-line"></div>
                            <p>or Sign Up with Google</p>
                            <div className="hr-line"></div>
                        </div>

                        <Link to="/">
                            <button className="google-button">
                                <div>
                                    <img className="google-icon" src="../../assets/icons/google.png"></img>
                                    Sign up with Google
                                </div>
                            </button>
                        </Link>

                        <p className="start-bottom-text">Already have an account? <Link className="bottom-link" to="/login">Log In</Link></p>
                    </div>
                </div>
            </>
        )
    } else {
        return (<div className="sign-div"> 
            <img className="start-logo" src="../../assets/logo/logo-white.png"></img>

            <h1 className="heading">Sign Up</h1>

            <form method="POST">
                <p className="input-name">Name*</p>
                <input type="text" className="start-input" placeholder="Name" name="name" value={user.name} onChange={handleInputs} />

                <p className="input-name">Email*</p>
                <input type="text" className="start-input" placeholder="mail@website.com" name="email" value={user.email} onChange={handleInputs} />

                <p className="input-name">Password*</p>
                <input type="password" className="start-input" placeholder="Min. 8 character" name="password" value={user.password} onChange={handleInputs} />

                <br></br>

                <button onClick={collectData} type="submit" className="start-button">Sign up</button>
            </form>
            

            <div className="or-div">
                <div className="hr-line"></div>
                <p>or Sign Up with Google</p>
                <div className="hr-line"></div>
            </div>

            <Link to="/">
                <button className="google-button">
                    <div>
                        <img className="google-icon" src="../../assets/icons/google.png"></img>
                        Sign up with Google
                    </div>
                </button>
            </Link>

            <p className="start-bottom-text">Already have an account? <Link className="bottom-link" to="/login">Log In</Link></p>
        </div>)
    }
}

export default SignUp;