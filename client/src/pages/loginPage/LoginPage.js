import React,{useState} from "react";
import './login.css'
import darkLogo from "../icons/echo_logo_side_dark.png"
import Logo from "../icons/echo_logo_side.png"

function LoginPage(){
    const [signUpClick, setSignUpClick] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setSignUpClick(state => !state);
    }
    return (
        <div className="LoginContainer">
    <div className={`container ${signUpClick? "right-panel-active":""}`} id="container">

	<div className="form-container sign-up-container">
		<form>
			<h1>Create Account</h1>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
    
	<div className="form-container sign-in-container">
		<form action="/home">
			<img src={darkLogo} className="leftIconTop" alt="EchoDarkLogo"/>

			<h1>Sign in</h1>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="./">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
            <img src={Logo} className="leftIcon" alt="EchoLogo"/>

			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick={handleClick}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Sign up for free & start listening</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick={handleClick}>Sign Up</button>
			</div>
		</div>
	</div>
</div>
</div>)
}

export default LoginPage;