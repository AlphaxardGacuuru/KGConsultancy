import React, { useEffect, useState } from "react"
// import Axios from "axios"
import { Link, useParams } from "react-router-dom"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

const edit = (props) => {
	var { id } = useParams()

	// Declare states
	const [role, setRole] = useState({})
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [permissions, setPermissions] = useState([])
	const [loading, setLoading] = useState()

	useEffect(() => {
		// Set page
		props.setPage({ name: "Edit Roles", path: ["roles"] })

		Axios.get(`api/roles/${id}`)
			.then((res) => {
				setRole(res.data.data)
				setPermissions(res.data.data.permissions)
			})
			.catch((err) => props.getErrors(err))
	}, [])

	var entities = ["suppliers", "staff", "role"]

	var CRUD = ["create", "read", "update", "delete"]

	// Handle Permission checkboxes
	const handleSetPermissions = (permission) => {
		var exists = permissions.includes(permission)

		var newPermissions = exists
			? permissions.filter((item) => item != permission)
			: [...permissions, permission]

		setPermissions(newPermissions)
	}

	const onSubmit = (e) => {
		e.preventDefault()

		// Show loader for button
		setLoading(true)

		// Send data to UsersController
		Axios.post(`/api/roles/${id}`, {
			name: name,
			description: description,
			permissions: permissions,
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
					<div className="card-header">Supplier Details</div>
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
										defaultValue={role.name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
							</div>
							{/* Name End */}

							{/* Description */}
							<div className="row mb-3">
								<label
									htmlFor="description"
									className="col-md-4 col-form-label text-md-end">
									Description
								</label>

								<div className="col-md-6">
									<input
										id="description"
										type="text"
										className="form-control"
										name="description"
										autoComplete="Description"
										defaultValue={role.description}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</div>
							</div>
							{/* Description End */}

							{/* Permissions */}
							<div className="row mb-3">
								<label
									htmlFor="description"
									className="col-md-4 col-form-label text-md-end">
									Permissions
								</label>

								<div className="col-md-6">
									<div className="hidden-scroll">
										<table className="table">
											<thead>
												<tr>
													<th>Entity</th>
													<th>Create</th>
													<th>Read</th>
													<th>Update</th>
													<th>Delete</th>
												</tr>
											</thead>
											<tbody>
												{entities.map((entity, key) => (
													<tr key={key}>
														{/* Entity Title */}
														<td className="text-capitalize">
															<b>{entity.replace("_", " ")}</b>
														</td>
														{/* Entity Title End */}
														{CRUD.map((item, key) => (
															<td key={key}>
																<label className="px-3">
																	<input
																		type="checkbox"
																		id=""
																		name="entities"
																		defaultChecked={role.permissions?.includes(
																			`${entity}.${item}`
																		)}
																		onClick={(e) =>
																			handleSetPermissions(`${entity}.${item}`)
																		}
																	/>
																</label>
															</td>
														))}
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
							{/* Permissions End */}
						</div>

						<div className="card-footer">
							<div className="text-end">
								<Btn
									type="submit"
									btnText="update role"
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
