import React, { useState, useEffect } from "react"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

const index = (props) => {
	const [admins, setAdmins] = useState([])
	const [loading, setLoading] = useState()

	useEffect(() => props.get("admin/admins", setAdmins), [])

	/*
	 * Delete
	 */
	const onDelete = (adminId) => {
		// Toggle loader
		setLoading(true)

		Axios.delete(`api/admin/admins/${adminId}`)
			.then((res) => {
				props.setMessages([res.data.message])
				// Toggle loader
				setLoading(true)
				// Delete rows
				setAdmins(admins.filter((admin) => admin.id != adminId))
			})
			.catch((err) => {
				// Toggle loader
				setLoading(true)
				props.getErrors(err)
			})
	}

	return (
		<div className="row px-4">
			<div className="col-sm-12">
				<h1>Staff</h1>

				<div className="d-flex justify-content-end mb-2">
					{/* Create Link */}
					<MyLink
						linkTo="/admin/staff/create"
						text="create"
					/>
				</div>
				{/* Create Link End */}
				<div
					className="hidden-scroll p-4"
					style={{ backgroundColor: "#FFF" }}>
					<table className="table table-hover">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Email</th>
								<th>Roles</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{admins.map((admin, key) => (
								<tr key={key}>
									<td>{key + 1}</td>
									<td>{admin.name}</td>
									<td>{admin.email}</td>
									<td>
										{admin.roleNames.map((role, key) => (
											<span key={key}>| {role}</span>
										))}
									</td>
									<td>
										<div className="d-flex">
											<div className="me-1">
												{/* Edit Link */}
												<MyLink
													className="btn-sm"
													linkTo={`/admin/staff/edit/${admin.id}`}
													text="edit"
												/>
												{/* Edit Link End */}
											</div>
											<div className="mx-1">
												{/* Confirm Delete Modal End */}
												<div
													className="modal fade"
													id={`deleteModal${key}`}
													tabIndex="-1"
													aria-labelledby="deleteModalLabel"
													aria-hidden="true">
													<div className="modal-dialog">
														<div className="modal-content">
															<div className="modal-header">
																<h1
																	id="deleteModalLabel"
																	className="modal-title fs-5 text-danger">
																	Delete User
																</h1>
																<button
																	type="button"
																	className="btn-close"
																	data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div className="modal-body">
																Are you sure you want to delete {admin.name} the
																user. This process is irreversible.
															</div>
															<div className="modal-footer justify-content-between">
																<button
																	type="button"
																	className="btn btn-secondary "
																	data-bs-dismiss="modal">
																	Close
																</button>
																<button
																	type="button"
																	className="btn btn-danger  text-white"
																	data-bs-dismiss="modal"
																	onClick={() => onDelete(admin.id)}>
																	DELETE
																</button>
															</div>
														</div>
													</div>
												</div>
												{/* Confirm Delete Modal End */}

												{/* <!-- Button trigger modal --> */}
												<button
													type="button"
													className="btn btn-sm btn-danger  text-white"
													data-bs-toggle="modal"
													data-bs-target={`#deleteModal${key}`}>
													DELETE
												</button>
											</div>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default index
