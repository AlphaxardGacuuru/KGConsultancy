import React, { useState } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

import CloseSVG from "@/svgs/CloseSVG"

const EmailNotVerified = (props) => {
	const history = useHistory()
	const location = useLocation()

	const [loading, setLoading] = useState()

	const resendEmail = () => {
		setLoading(true)

		Axios.post("email/verification-notification")
			.then((res) => {
				setLoading(false)
				props.setMessages([res.data.message])
			})
			.catch((err) => {
				setLoading(false)
				props.getErrors(err)
			})
	}

	const blur =
		!props.auth.emailIsVerified &&
		!location.pathname.match("/supplier/login") &&
		!location.pathname.match("/supplier/register") &&
		location.pathname.match("/supplier")

	return (
		<div className={blur ? "menu-open" : ""}>
			<div
				className="background-blur"
				style={{ visibility: blur ? "visible" : "hidden" }}></div>
			<div className="bottomMenu">
				<div className="d-flex align-items-center justify-content-between">
					{/* <!-- Logo Area --> */}
					<div className="logo-area p-2">
						<a href="#">Email Verification</a>
					</div>
				</div>
				<p>
					We have sent the verification email to
					<span className="text-primary"> {props.auth.email}</span>. If you
					cannot find the email verification in your primary folder, kindly
					check the Spam/Junk folder.
				</p>
				<p>
					If you did not find the email verification email please click on the
					resend button
				</p>
				{/* Resend Button */}
				<Btn
					btnText="Resend email verification"
					btnClass="text-white my-2"
					btnStyle={{ backgroundColor: "#234458" }}
					onClick={resendEmail}
					loading={loading}
				/>
				{/* Resend Button End */}
			</div>
		</div>
	)
}

export default EmailNotVerified
