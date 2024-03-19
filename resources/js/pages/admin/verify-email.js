import React, { useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"

const VerifyEmail = (props) => {
	var { id, hash, expires, signature } = useParams()

	const router = useHistory()

	useEffect(() => {
		// Verify Email
		Axios.get(`/verify/${id}/${hash}?expires=${expires}&signature=${signature}`)
			.then((res) => {
				props.setMessages([res.data.message])
				// Redirect
				setTimeout(() => router.push(`/supplier/view/${props.auth.id}`), 500)
			})
			.catch((err) => props.getErrors(err, true))
	}, [])

	return (
		<div
			id="preloader"
			style={{ top: "0" }}>
			<center className="p-5">
				<h1 className="text-white mb-5">Verifying Email</h1>
				<div
					className="spinner-border text-white my-auto"
					style={{ width: "5em", height: "5em" }}></div>
				<div className="text-white mt-5">Please wait...</div>
			</center>
		</div>
	)
}

export default VerifyEmail
