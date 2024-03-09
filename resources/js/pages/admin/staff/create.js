import React, { useEffect, useState } from "react"
// import Axios from "axios"
import { Link, useHistory } from "react-router-dom"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

const create = (props) => {
	const router = useHistory()

	useEffect(() => {
		// Set page
		props.setPage({ name: "Create Staff", path: ["staff"] })
		props.get("roles", setRoles)
	}, [])

	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [roleId, setRoleId] = useState("")
	const [roles, setRoles] = useState([])
	const [loading, setLoading] = useState()

	const onSubmit = (e) => {
		e.preventDefault()
		setLoading(true)

		// Send data to UsersController
		Axios.post(`/api/staff`, {
			name: name,
			phone: phone,
			email: email,
			roleId: roleId,
		})
			.then((res) => {
				// Remove loader for button
				setLoading(false)
				props.setMessages([res.data.message])
				// Redirect
				setTimeout(() => router.push("/admin/staff"), 500)
			})
			.catch((err) => {
				// Remove loader for button
				setLoading(false)
				props.getErrors(err)
			})
	}

	return (
		<div className="row">
			<div className="col-sm-2"></div>
			<div className="col-sm-8">
				<div className="card">
					<div className="card-header">Staff Details</div>
					<form onSubmit={onSubmit}>
						<div className="card-body">
							{/* Name */}
							<div className="row mb-3">
								<label
									htmlFor="name"
									className="col-md-4 col-form-label text-md-end">
									Name
								</label>

								<div className="col-md-6">
									<input
										id="name"
										type="text"
										className="form-control"
										name="name"
										autoComplete="name"
										autoFocus={true}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
							</div>
							{/* Name End */}

							{/* Phone */}
							<div className="row mb-3">
								<label
									htmlFor="phone"
									className="col-md-4 col-form-label text-md-end">
									Phone
								</label>

								<div className="col-md-6">
									<input
										id="phone"
										type="text"
										className="form-control"
										name="phone"
										autoComplete="Phone"
										autoFocus={true}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
							</div>
							{/* Phone End */}

							{/* Email */}
							<div className="row mb-3">
								<label
									htmlFor="email"
									className="col-md-4 col-form-label text-md-end">
									Email
								</label>

								<div className="col-md-6">
									<input
										id="email"
										type="text"
										className="form-control"
										name="email"
										autoComplete="Email"
										autoFocus={true}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
							</div>
							{/* Email End */}

							{/* Role */}
							<div className="row mb-3">
								<label
									htmlFor="role"
									className="col-md-4 col-form-label text-md-end">
									Role
								</label>

								<div className="col-md-6">
									<select
										id="role"
										name="role"
										className="form-control"
										onChange={(e) => setRoleId(e.target.value)}>
										<option value="">Select Role</option>
										{roles.map((role, key) => (
											<option
												key={key}
												value={role.id}
												className="text-capitalize">
												{role.name}
											</option>
										))}
									</select>
								</div>
							</div>
							{/* Role End */}
						</div>

						<div className="card-footer">
							<div className="text-end">
								<Btn
									type="submit"
									btnText="create staff"
									loading={loading}
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="col-sm-2"></div>
		</div>
	)
}

export default create
