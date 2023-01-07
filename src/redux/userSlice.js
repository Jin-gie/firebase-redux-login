import { createSlice } from "@reduxjs/toolkit"
import { logOut } from "../utils/userAuth"

const initialState = {
	user: null,
}

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload
		},
		logout: (state) => {
			logOut()
			state.user = null
		}
	}
})

export const { login, logout } = userSlice.actions