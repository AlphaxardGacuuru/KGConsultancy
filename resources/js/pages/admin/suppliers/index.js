import React, { useEffect, useState } from "react"

import Btn from "@/components/Core/Btn"
import Img from "@/components/Core/Img"
import MyLink from "@/components/Core/MyLink"
import PaginationLinks from "@/components/Core/PaginationLinks"

import PersonSVG from "@/svgs/PersonSVG"
import EditSVG from "@/svgs/EditSVG"
import EyeSVG from "@/svgs/EyeSVG"

const index = (props) => {
	// Get Suppliers
	const [suppliers, setSuppliers] = useState([])
	const [loading, setLoading] = useState()

	const [nameQuery, setNameQuery] = useState("")
	const [genderQuery, setGenderQuery] = useState("")

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
				<div className="my-card shadow-sm p-2">
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
				<div className="my-card shadow-sm p-4">
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
					</div>
				</div>
				{/* Filters End */}

				<br />

				<div className="table-responsive mb-5">
					<table className="table table-hover">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Phone</th>
								<th>Secondary Phone</th>
								<th>WhatsApp Phone</th>
								<th>Email</th>
								<th>Supplier Name</th>
								<th>Supplier Type</th>
								<th>Countries Registered</th>
								<th>Countries In Operation</th>
								<th>Category</th>
								<th>Directors</th>
								<th>Staff</th>
								<th>Has Business Registration</th>
								<th>Has Business Permit</th>
								<th>Has Tax Compliance</th>
								<th>Has License</th>
								<th>Rating</th>
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
								.map((supplier, key) => (
									<tr key={key}>
										<td>{key + 1}</td>
										<td>{supplier.name}</td>
										<td>{supplier.phone}</td>
										<td>{supplier.secondaryPhone}</td>
										<td>{supplier.whatsAppPhone}</td>
										<td>{supplier.email}</td>
										<td>{supplier.supplierName}</td>
										<td>{supplier.supplierType}</td>
										<td>
											{supplier.countriesRegistered?.map(
												(countriesRegistered, key) => (
													<span
														key={key}
														className="bg-primary-subtle rounded-pill me-2 px-2">
														{countriesRegistered}
													</span>
												)
											)}
										</td>
										<td>
											{supplier.countriesInOperation?.map(
												(countriesInOperation, key) => (
													<span
														key={key}
														className="bg-primary-subtle rounded-pill me-2 px-2">
														{countriesInOperation}
													</span>
												)
											)}
										</td>
										<td>{supplier.category}</td>
										<td>
											{supplier.directors?.map((directors, key) => (
												<span
													key={key}
													className="bg-primary-subtle rounded-pill me-2 px-2">
													{directors}
												</span>
											))}
										</td>
										<td>{supplier.staff}</td>
										<td>
											{supplier.hasBusinessRegistration ? (
												<span className="bg-success-subtle rounded-pill px-2">
													Yes
												</span>
											) : (
												<span className="bg-danger-subtle rounded-pill px-2">
													No
												</span>
											)}
										</td>
										<td>
											{supplier.hasBusinessPermit ? (
												<span className="bg-success-subtle rounded-pill px-2">
													Yes
												</span>
											) : (
												<span className="bg-danger-subtle rounded-pill px-2">
													No
												</span>
											)}
										</td>
										<td>
											{supplier.hasTaxCompliance ? (
												<span className="bg-success-subtle rounded-pill px-2">
													Yes
												</span>
											) : (
												<span className="bg-danger-subtle rounded-pill px-2">
													No
												</span>
											)}
										</td>
										<td>
											{supplier.hasLicense ? (
												<span className="bg-success-subtle rounded-pill px-2">
													Yes
												</span>
											) : (
												<span className="bg-danger-subtle rounded-pill px-2">
													No
												</span>
											)}
										</td>
										<td>{supplier.rating}</td>
										<td>{supplier.createdAt}</td>
										<td className="text-end">
											<div className="d-flex">
												<MyLink
													linkTo={`/admin/suppliers/view/${supplier.id}`}
													text={<EyeSVG />}
													className="btn-sm me-2"
												/>

												<MyLink
													linkTo={`/admin/suppliers/edit/${supplier.id}`}
													text={<EditSVG />}
													className="btn-sm"
												/>
											</div>
										</td>
									</tr>
								))}
						</tbody>
					</table>
					<div className="my-2">
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
		</div>
	)
}

export default index
