import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes() {
	const user = useSelector((state) => state.user)

	return (
		user.user ? <Outlet/> : <Navigate to="/" />
	)
}

export default ProtectedRoutes