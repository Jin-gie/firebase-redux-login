import React, { useEffect } from 'react'
import "./Login.css"
import { useState } from 'react'
import { Link } from "react-router-dom"
import { auth} from "../../firebase"
import { loginWithEmailAndPassword } from "../../utils/userAuth"

function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	

	return (
		<div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => loginWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        {/* <div>
          <Link to="/reset">Forgot Password</Link>
        </div> */}
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
	)
}

export default Login