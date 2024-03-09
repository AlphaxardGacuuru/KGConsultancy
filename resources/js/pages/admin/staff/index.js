import React, { useState, useEffect } from "react"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

import PlusSVG from "@/svgs/PlusSVG"
import EditSVG from "@/svgs/EditSVG"

const index = (props) => {
	const [staff, setStaff] = useState([])
	const [loading, setLoading] = useState()

	useEffect(() => {
		// Set page
		props.setPage({ name: "Staff", path: ["staff"] })
		props.get("staff", setStaff)
	}, [])

	/*
	 * Delete
	 */
	const onDelete = (staffId) => {
		// Toggle loader
		setLoading(true)

		Axios.delete(`api/users/${staffId}`)
			.then((res) => {
				props.setMessages([res.data.message])
				// Toggle loader
				setLoading(true)
				// Delete rows
				setStaff(staff.filter((staff) => staff.id != staffId))
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
				{/* Staff */}
				<div
					className="hidden-scroll p-4 shadow-sm"
					style={{ backgroundColor: "#FFF" }}>
					<table className="table table-hover">
						<thead>
							<tr>
								<td
									colSpan="5"
									className="bg-white"></td>
								<td className="text-end bg-white">
									{/* Create Link */}
									<MyLink
										linkTo="/admin/staff/create"
										icons={<PlusSVG />}
										text="create"
									/>
								</td>
							</tr>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Phone</th>
								<th>Email</th>
								<th>Role</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody className="table-group-divider">
							{staff.map((staff, key) => (
								<tr key={key}>
									<td>{key + 1}</td>
									<td>{staff.name}</td>
									<td>{staff.phone}</td>
									<td>{staff.email}</td>
									<td>{staff.role}</td>
									<td>
										<div className="d-flex">
											<div className="me-1">
												<MyLink
													linkTo={`/admin/staff/edit/${staff.id}`}
													icon={<EditSVG />}
													text="edit"
													className="btn-sm"
												/>
											</div>
											<div className="mx-1">
												{/* Confirm Delete Modal End */}
												<div
													className="modal fade"
													id={`deleteModal${staff.id}`}
													tabIndex="-1"
													aria-labelledby="deleteModalLabel"
													aria-hidden="true">
													<div className="modal-dialog">
														<div className="modal-content">
															<div className="modal-header">
																<h1
																	id="deleteModalLabel"
																	className="modal-title fs-5 text-danger">
																	Delete Staff
																</h1>
																<button
																	type="button"
																	className="btn-close"
																	data-bs-dismiss="modal"
																	aria-label="Close"></button>
															</div>
															<div className="modal-body text-wrap">
																Are you sure you want to delete {staff.name}.
																This process is irreversible.
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
																	onClick={(e) => onDelete(staff.id)}>
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
													data-bs-target={`#deleteModal${staff.id}`}>
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
				{/* Staff Area End */}
			</div>
		</div>
	)
}

export default index
