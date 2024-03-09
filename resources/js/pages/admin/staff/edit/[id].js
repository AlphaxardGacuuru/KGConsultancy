import React, { useEffect, useState } from "react"
// import Axios from "axios"
import { Link, useHistory, useParams } from "react-router-dom"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

const edit = (props) => {
	const { id } = useParams()
	const router = useHistory()

	const [admin, setAdmin] = useState({})

	// Declare states
	const [roles, setRoles] = useState([])
	const [userRoles, setUserRoles] = useState([])
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [btnLoading, setBtnLoading] = useState()

	useEffect(() => {
		Axios.get(`api/admin/admins/${id}`, setAdmin).then((res) => {
			setAdmin(res.data.data)
			setUserRoles(res.data.data.roles.map((role) => role.id))
		})
	}, [])
	useEffect(() => props.get("admin/roles", setRoles), [])

	// Handle Permission checkboxes
	const handleSetUserRoles = (roleId) => {
		var exists = userRoles.includes(roleId)

		var newRoles = exists
			? userRoles.filter((item) => item != roleId)
			: [...userRoles, roleId]

		setUserRoles(newRoles)
	}

	const onSubmit = (e) => {
		e.preventDefault()

		// Show loader for button
		setBtnLoading(true)

		// Send data to UsersController
		Axios.post(`/api/admin/admins/${id}`, {
			name: name,
			email: email,
			phone: phone,
			userRoles: userRoles,
			_method: "PUT",
		})
			.then((res) => {
				// Remove loader for button
				setBtnLoading(false)
				props.setMessages([res.data.message])
				// Fetch Admin
				props.get(`admin/admins/${id}`, setAdmin)
			})
			.catch((err) => {
				// Remove loader for button
				setBtnLoading(false)
				props.getErrors(err)
			})
	}

	return (
		<div className="row px-4">
			<div className="col-sm-12">
				{/* Profile Pic Form */}
				<br />
				<div className="form-group">
					<center>
						<h1>Edit Staff</h1>
						<br />

						<form onSubmit={onSubmit}>
							{/* Name */}
							<label
								htmlFor=""
								className="float-start">
								Name
							</label>
							<input
								type="text"
								name="firstname"
								className="form-control"
								placeholder={admin.name}
								onChange={(e) => setName(e.target.value)}
							/>
							{/* Name End */}
							<br />
							{/* Email */}
							<label
								htmlFor=""
								className="float-start">
								Email
							</label>
							<input
								type="text"
								name="email"
								className="form-control"
								placeholder={admin.email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{/* Email End */}
							<br />
							{/* Phone */}
							<label
								htmlFor=""
								className="float-start">
								Phone
							</label>
							<input
								type="tel"
								name="phone"
								className="form-control"
								placeholder={admin.phone}
								onChange={(e) => setPhone(e.target.value)}
							/>
							{/* Phone End */}
							<br />
							{/* Roles */}
							<div className="form-group">
								<label htmlFor="">Roles</label>
								<div className="d-flex justify-content-center flex-wrap">
									{roles.map((role, key) => (
										<div
											key={key}
											className="border-bottom m-1 p-2">
											<label key={key}>
												<input
													type="checkbox"
													id=""
													name="entities"
													defaultChecked={admin.roleNames.includes(role.name)}
													onClick={(e) => handleSetUserRoles(role.id)}
												/>
												<span className="text-capitalize me-2">
													{" "}
													{role.name}
												</span>
											</label>
										</div>
									))}
								</div>
							</div>
							{/* Roles End */}

							<br />
							<Btn
								type="submit"
								btnText="save changes"
								loading={btnLoading}
							/>
							<br />
							<br />
							<MyLink
								linkTo="/admin/staff"
								text="back to admins"
							/>
						</form>

						<br />
						<br />
						<br />
					</center>
				</div>
			</div>
		</div>
	)
}

export default edit
