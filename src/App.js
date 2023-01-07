import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from 'react';
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import Register from "./pages/Register/Register"
import ProtectedRoutes from './utils/ProtectedRoutes';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			dispatch(login({
				displayName: userAuth.displayName,
				email: userAuth.email,
				photoUrl: userAuth.photoURL
			}))
		})
		return unsubscribe
	}, [dispatch])
	

  return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route element={<ProtectedRoutes />}>
					<Route path='/dashboard' element={<Dashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
