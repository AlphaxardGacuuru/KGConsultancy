import React, { useEffect, useState } from "react"

import Btn from "@/components/Core/Btn"
import Img from "@/components/Core/Img"
import MyLink from "@/components/Core/MyLink"
import PaginationLinks from "@/components/Core/PaginationLinks"

import PersonSVG from "@/svgs/PersonSVG"

const index = (props) => {
	// Get Suppliers
	const [suppliers, setSuppliers] = useState([])
	const [loading, setLoading] = useState()

	const [nameQuery, setNameQuery] = useState("")
	const [genderQuery, setGenderQuery] = useState("")
	const [facultyQuery, setFacultyQuery] = useState("")
	const [departmentQuery, setDepartmentQuery] = useState("")

	useEffect(() => {
		// Set page
		props.setPage({ name: "Suppliers", path: ["suppliers"] })
		props.getPaginated("suppliers", setSuppliers)
	}, [])

	/*
	 * Delete
	 */
	const onDelete = (supplierId) => {
		// Toggle loader
		setLoading(true)

		Axios.delete(`/api/suppliers/${supplierId}`)
			.then((res) => {
				props.setMessages([res.data.message])
				// Toggle loader
				setLoading(true)
				// Delete rows
				props.getPaginated("suppliers", setSuppliers)
			})
			.catch((err) => {
				// Toggle loader
				setLoading(true)
				props.getErrors(err)
			})
	}

	return (
		<div className="row">
			<div className="col-sm-12">
				{/* Data */}
				<div className="card shadow-sm p-2">
					<div className="d-flex justify-content-between">
						{/* Total */}
						<div className="d-flex justify-content-between w-100 align-items-center mx-4">
							<div>
								<span className="fs-4">{suppliers.meta?.total}</span>
								<h4>Total Suppliers</h4>
							</div>
							<div className="fs-1 py-3 px-4 bg-primary-subtle text-primary rounded-circle">
								<PersonSVG />
							</div>
						</div>
						{/* Total End */}
					</div>
				</div>
				{/* Data End */}

				<br />

				{/* Filters */}
				<div className="card shadow-sm p-4">
					<div className="d-flex flex-wrap">
						{/* Name */}
						<div className="flex-grow-1 me-2 mb-2">
							<input
								id=""
								type="text"
								name="name"
								placeholder="Search by Name"
								className="form-control"
								onChange={(e) => setNameQuery(e.target.value)}
							/>
						</div>
						{/* Name End */}
						{/* Gender */}
						<div className="flex-grow-1 me-2 mb-2">
							<select
								id=""
								type="text"
								name="name"
								placeholder="Search by Gender"
								className="form-control me-2"
								onChange={(e) => setGenderQuery(e.target.value)}>
								<option value="">Search by Gender</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</div>
						{/* Gender End */}
						{/* Faculty */}
						<div className="flex-grow-1 me-2 mb-2">
							<select
								id=""
								type="text"
								name="name"
								placeholder="Search by Faculty"
								className="form-control me-2"
								onChange={(e) => setFacultyQuery(e.target.value)}>
								<option value="">Search by Faculty</option>
								{faculties.map((faculty, key) => (
									<option
										key={key}
										value={faculty.id}>
										{faculty.name}
									</option>
								))}
							</select>
						</div>
						{/* Faculty End */}
						{/* Department */}
						<div className="flex-grow-1 me-2 mb-2">
							<select
								id=""
								type="text"
								name="name"
								placeholder="Search by Gender"
								className="form-control me-2"
								onChange={(e) => setDepartmentQuery(e.target.value)}>
								<option value="">Search by Department</option>
								{departments.map((department, key) => (
									<option
										key={key}
										value={department.id}>
										{department.name}
									</option>
								))}
							</select>
						</div>
						{/* Department End */}
					</div>
				</div>
				{/* Filters End */}

				<br />

				<div className="table-responsive mb-5">
					<table className="table table-hover">
						<thead>
							<tr>
								<th colSpan="9"></th>
								<th className="text-end">
									<MyLink
										linkTo="/admin/suppliers/create"
										text="add supplier"
									/>
								</th>
							</tr>
							<tr>
								<th>#</th>
								<th></th>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Gender</th>
								<th>Faculty</th>
								<th>Department</th>
								<th>Date Joined</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{suppliers.data
								?.filter((supplier) => {
									var name = supplier.name.toLowerCase()
									var query = nameQuery.toLowerCase()

									return name.match(query)
								})
								.filter((supplier) => {
									if (genderQuery) {
										return supplier.gender == genderQuery
									} else {
										return true
									}
								})
								.filter((supplier) => {
									if (facultyQuery) {
										return supplier.facultyId == facultyQuery
									} else {
										return true
									}
								})
								.filter((supplier) => {
									if (departmentQuery) {
										return supplier.departmentId == departmentQuery
									} else {
										return true
									}
								})
								.map((supplier, key) => (
									<tr key={key}>
										<td>{props.iterator(key, suppliers)}</td>
										<td>
											<Img
												src={supplier.avatar}
												className="rounded-circle"
												style={{ width: "7em" }}
												alt="Avatar"
											/>
										</td>
										<td>{supplier.name}</td>
										<td>{supplier.email}</td>
										<td>{supplier.phone}</td>
										<td className="text-capitalize">{supplier.gender}</td>
										<td>{supplier.facultyName}</td>
										<td>{supplier.departmentName}</td>
										<td>{supplier.createdAt}</td>
										<td className="text-end">
											<div className="d-flex">
												<MyLink
													linkTo={`/admin/suppliers/${supplier.id}/edit`}
													text="edit"
													className="btn-sm"
												/>

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
																		Delete Supplier
																	</h1>
																	<button
																		type="button"
																		className="btn-close"
																		data-bs-dismiss="modal"
																		aria-label="Close"></button>
																</div>
																<div className="modal-body text-wrap">
																	Are you sure you want to delete{" "}
																	{supplier.name}.
																</div>
																<div className="modal-footer justify-content-between">
																	<button
																		type="button"
																		className="btn btn-light rounded-pill"
																		data-bs-dismiss="modal">
																		Close
																	</button>
																	<button
																		type="button"
																		className="btn btn-danger rounded-pill"
																		data-bs-dismiss="modal"
																		onClick={() => onDelete(supplier.id)}>
																		Delete
																	</button>
																</div>
															</div>
														</div>
													</div>
													{/* Confirm Delete Modal End */}

													{/* Button trigger modal */}
													<button
														type="button"
														className="btn btn-sm btn-outline-danger rounded-pill"
														data-bs-toggle="modal"
														data-bs-target={`#deleteModal${key}`}>
														Delete
													</button>
												</div>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
					{/* Pagination Links */}
					<PaginationLinks
						list={suppliers}
						getPaginated={props.getPaginated}
						setState={setSuppliers}
					/>
					{/* Pagination Links End */}
				</div>
			</div>
		</div>
	)
}

export default index
