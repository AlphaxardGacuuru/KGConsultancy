import React, { useEffect, useState } from "react"
// import Axios from "axios"
import { Link, useParams } from "react-router-dom"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

const edit = (props) => {
	var { id } = useParams()

	const [staff, setStaff] = useState({})
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [roleId, setRoleId] = useState("")
	const [roles, setRoles] = useState([])
	const [loading, setLoading] = useState()

	useEffect(() => {
		// Set page
		props.setPage({ name: "Edit Staff", path: ["staff"] })
		props.get(`users/${id}`, setStaff)
		props.get("roles", setRoles)
	}, [])

	const onSubmit = (e) => {
		e.preventDefault()

		// Show loader for button
		setLoading(true)

		// Send data to UsersController
		Axios.post(`/api/staff/${id}`, {
			name: name,
			phone: phone,
			email: email,
			roleId: roleId,
			_method: "PUT",
		})
			.then((res) => {
				// Remove loader for button
				setLoading(false)
				props.setMessages([res.data.message])
				// Window location reload
				window.location.reload()
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
										defaultValue={staff.name}
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
										defaultValue={staff.phone}
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
										defaultValue={staff.email}
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
												className="text-capitalize"
												selected={role.id == staff.roleId}>
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
									btnText="update staff"
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

export default edit
