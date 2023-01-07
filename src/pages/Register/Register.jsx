import React, { useState } from 'react'
import { registerWithEmailAndPassword } from "../../utils/userAuth"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Register.css"

function Register() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [name, setName] = useState("")
	const navigate = useNavigate()
	const user = useSelector((state) => state.user)

	if (user.user) {
		navigate("/dashboard")
	}

	const register = () => {
		if (!name) alert("Please enter name")
		else registerWithEmailAndPassword(name, email, password)
	}

	return (
		<div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
    </div>
	)
}

export default Register