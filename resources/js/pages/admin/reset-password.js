import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
	useHistory,
	useParams,
} from "react-router-dom/cjs/react-router-dom.min"
import CryptoJS from "crypto-js"

import MyLink from "@/components/core/MyLink"
import Btn from "@/components/core/Btn"

const ResetPassword = (props) => {
	const router = useHistory()

	const { token, email } = useParams()
	const [password, setPassword] = useState()
	const [confirmationPassword, setConfirmationPassword] = useState()
	const [loading, setLoading] = useState()

	// Encrypt Token
	const encryptedToken = (token) => {
		const secretKey = "KGConsultancyAuthorizationToken"
		// Encrypt
		return CryptoJS.AES.encrypt(token, secretKey).toString()
	}

	/*
	 * Submit
	 */
	const onSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		Axios.post("/reset-password", {
			token: token,
			email: email,
			password: password,
			password_confirmation: confirmationPassword,
		})
			.then((res) => {
				props.setMessages([res.data.message])
				// Remove loader
				setLoading(false)
				// Redirect to Home
				setTimeout(() => router.push(`/supplier/login`), 500)
			})
			.catch((err) => {
				setLoading(false)
				// Get Errors
				props.getErrors(err)
			})
	}

	return (
		<div className="container mt-5">
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<form onSubmit={onSubmit}>
						<div className="card">
							<div
								className="card-header text-white"
								style={{ backgroundColor: "#234458" }}>
								Reset Password
							</div>

							<div className="card-body">
								{/* Password */}
								<div className="row mb-3">
									<label
										htmlFor="password"
										className="col-md-4 col-form-label text-md-end">
										New Password
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
								{/* Password End */}

								{/* Confirm Password */}
								<div className="row mb-3">
									<label
										htmlFor="password_confirmation"
										className="col-md-4 col-form-label text-md-end">
										Confirm Password
									</label>

									<div className="col-md-6">
										<input
											id="password_confirmation"
											type="password"
											className="form-control"
											name="password_confirmation"
											autoComplete="current-password"
											onChange={(e) => setConfirmationPassword(e.target.value)}
											required={true}
										/>
									</div>
								</div>
								{/* Confirm Password End */}
							</div>

							<div className="card-footer d-flex justify-content-between">
								<MyLink
									linkTo="/supplier/login"
									text="back to login"
								/>

								<Btn
									type="submit"
									btnText="reset password"
									loading={loading}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ResetPassword
