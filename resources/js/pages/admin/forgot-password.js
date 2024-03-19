import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import MyLink from "@/components/core/MyLink"
import Btn from "@/components/core/Btn"

const ForgotPassword = (props) => {
	const [email, setEmail] = useState()
	const [loading, setLoading] = useState()

	const onResetLink = () => {
		setLoading(true)

		Axios.post("/forgot-password", { email: email })
			.then((res) => {
				setLoading(false)
				props.setMessages([res.data.message])
			})
			.catch((err) => {
				setLoading(false)
				props.getErrors(err)
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
							Forgot Password
						</div>

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
						</div>

						<div className="card-footer d-flex justify-content-between">
							<MyLink
								linkTo="/supplier/login"
								text="back to login"
							/>

							<Btn
								type="submit"
								btnText="send reset link"
								onClick={onResetLink}
								loading={loading}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ForgotPassword
