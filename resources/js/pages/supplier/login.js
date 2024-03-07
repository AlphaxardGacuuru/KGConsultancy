import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import CryptoJS from "crypto-js"

import Btn from "@/components/core/Btn"

const login = (props) => {
	const router = useHistory()

	useEffect(() => {
		if (props.auth.name != "Guest") {
			// Handle Redirects
			if (props.auth.accountType == "supplier") {
				router.push("/supplier")
			} else {
				router.push("/admin")
			}
		}
	}, [])

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [loading, setLoading] = useState()

	useEffect(() => {
		if (props.auth.name != "Guest") {
			// Handle Redirects
			if (props.auth.accountType == "supplier") {
				router.push("/supplier")
			} else {
				router.push("/admin")
			}
		}
	}, [])

	// Encrypt Token
	const encryptedToken = (token) => {
		const secretKey = "KGConsultancyAuthorizationToken"
		// Encrypt
		return CryptoJS.AES.encrypt(token, secretKey).toString()
	}

	const onSubmit = (e) => {
		setLoading(true)
		e.preventDefault()

		Axios.get("/sanctum/csrf-cookie").then(() => {
			Axios.post(`/login`, {
				email: email,
				password: password,
				device_name: "deviceName",
				remember: "checked",
			})
				.then((res) => {
					props.setMessages([res.data.message])
					// Remove loader
					setLoading(false)
					// Encrypt and Save Sanctum Token to Local Storage
					props.setLocalStorage("sanctumToken", encryptedToken(res.data.data))
					// Update Logged in user
					Axios.get("/api/auth", {
						headers: { Authorization: `Bearer ${res.data.data}` },
					})
						.then((res) => {
							// Set LocalStorage
							props.setLocalStorage("auth", res.data.data)
							// Reload page
							// window.location.href = `/#/instructor`
							window.location.reload()
						})
						.catch((err) => props.getErrors(err, false))
				})
				.catch((err) => {
					// Remove loader
					setLoading(false)
					props.getErrors(err)
				})
		})
	}

	return (
		<div className="container mt-5">
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<div className="card">
						<div
							className="card-header text-white"
							style={{ backgroundColor: "#234458" }}>
							Login
						</div>

						<form onSubmit={onSubmit}>
							<div className="card-body">
								<div className="row mb-3">
									<label
										htmlFor="email"
										className="col-md-4 col-form-label text-md-end">
										Email Address
									</label>

									<div className="col-md-6">
										<input
											id="email"
											type="email"
											className="form-control"
											name="email"
											required
											autoComplete="email"
											autoFocus
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>

								<div className="row mb-3">
									<label
										htmlFor="password"
										className="col-md-4 col-form-label text-md-end">
										Password
									</label>

									<div className="col-md-6">
										<input
											id="password"
											type="password"
											className="form-control"
											name="password"
											required
											autoComplete="current-password"
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
								</div>

								<div className="row mb-3">
									<div className="col-md-6 offset-md-4">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												name="remember"
												id="remember"
											/>

											<label
												className="form-check-label"
												htmlFor="remember">
												Remember Me
											</label>
										</div>
									</div>
								</div>
							</div>

							<div className="row mb-0">
								<div className="col-md-8 offset-md-4">
									<a
										className="btn btn-link"
										href="{{ route('password.request') }}">
										Forgot Your Password?
									</a>
									<div className="ms-3">
										Don't have an account?
										<Link
											to="/supplier/register"
											className="btn btn-link">
											Sign up.
										</Link>
									</div>
								</div>
							</div>

							<div className="card-footer d-flex justify-content-end">
								<Btn
									type="submit"
									btnText="login"
									loading={loading}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default login
