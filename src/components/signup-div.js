import React from "react";

function SignUpDiv() {
    return (
        <>
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
        </>
    )
}

export default SignUpDiv;