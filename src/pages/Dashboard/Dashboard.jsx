import React from 'react'
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userSlice'

function Dashboard() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logout())
		navigate("/")
	}

	return (
		<>
			<div>Dashboard</div>
			<button
				onClick={handleLogout}
			>
				Logout
			</button>
		</>
	)
}

export default Dashboard