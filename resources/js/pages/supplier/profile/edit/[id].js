import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

import Btn2 from "@/components/core/Btn2"

import PlusSVG from "@/svgs/PlusSVG"
import CloseSVG from "@/svgs/CloseSVG"
import MinusSVG from "@/svgs/MinusSVG"

const edit = (props) => {
	const { id } = useParams()

	const [supplier, setSupplier] = useState({})

	const [name, setName] = useState()
	const [phone, setPhone] = useState()
	const [secondaryPhone, setSecondaryPhone] = useState()
	const [whatsAppPhone, setWhatsAppPhone] = useState()
	const [password, setPassword] = useState()
	const [confirmationPassword, setConfirmationPassword] = useState()
	const [supplierName, setSupplierName] = useState()
	const [supplierType, setSupplierType] = useState()
	const [countriesRegistered, setCountriesRegistered] = useState([""])
	const [countriesInOperation, setCountriesInOperation] = useState([""])
	const [category, setCategory] = useState()
	const [staff, setStaff] = useState()
	const [directors, setDirectors] = useState([""])
	const [hasBusinessRegistration, setHasBusinessRegistration] = useState()
	const [hasBusinessPermit, setHasBusinessPermit] = useState()
	const [hasTaxCompliance, setHasTaxCompliance] = useState()
	const [hasLicense, setHasLicense] = useState()
	const [loading, setLoading] = useState()

	useEffect(() => {
		// Set Page
		props.setPage({ name: "Edit Supplier Profile" })

		Axios.get(`/api/suppliers/${id}`).then((res) => {
			setSupplier(res.data.data)
			setCountriesRegistered(res.data.data.countriesRegistered)
			setCountriesInOperation(res.data.data.countriesInOperation)
			setDirectors(res.data.data.directors)
			setHasBusinessRegistration(res.data.data.hasBusinessRegistration)
			setHasBusinessPermit(res.data.data.hasBusinessPermit)
			setHasTaxCompliance(res.data.data.hasTaxCompliance)
			setHasLicense(res.data.data.hasLicense)
		})
	}, [])

	/*
	 * Submit
	 */
	const onSubmit = (e) => {
		setLoading(true)
		e.preventDefault()

		Axios.put(`/api/suppliers/${id}`, {
			name: name,
			phone: phone,
			secondaryPhone: secondaryPhone,
			whatsAppPhone: whatsAppPhone,
			password: password,
			password_confirmation: confirmationPassword,
			supplerName: supplierName,
			supplierType: supplierType,
			countriesRegistered: countriesRegistered,
			countriesInOperation: countriesInOperation,
			category: category,
			staff: staff,
			directors: directors,
			hasBusinessRegistration: hasBusinessRegistration,
			hasBusinessPermit: hasBusinessPermit,
			hasTaxCompliance: hasTaxCompliance,
			hasLicense: hasLicense,
		})
			.then((res) => {
				setLoading(false)
				props.setMessages([res.data.message])
				// Window location reload
				window.location.reload()
			})
			.catch((err) => {
				setLoading(false)
				// Get Errors
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
										defaultValue={supplier.name}
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
										type="tel"
										className="form-control"
										name="phone"
										autoComplete="phone"
										defaultValue={supplier.phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</div>
							</div>
							{/* Phone End */}

							{/* Secondary Phone */}
							<div className="row mb-3">
								<label
									htmlFor="secondary phone"
									className="col-md-4 col-form-label text-md-end">
									Secondary Phone
								</label>

								<div className="col-md-6">
									<input
										id="secondary phone"
										type="tel"
										className="form-control"
										name="secondary phone"
										autoComplete="secondary phone"
										defaultValue={supplier.secondaryPhone}
										onChange={(e) => setSecondaryPhone(e.target.value)}
									/>
								</div>
							</div>
							{/* Secondary Phone End */}

							{/* WhatsApp Phone */}
							<div className="row mb-3">
								<label
									htmlFor="phone"
									className="col-md-4 col-form-label text-md-end">
									WhatsApp Phone
								</label>

								<div className="col-md-6">
									<input
										id="whatsapp phone"
										type="tel"
										className="form-control"
										name="whatsapp phone"
										autoComplete="whatsapp phone"
										defaultValue={supplier.whatsAppPhone}
										onChange={(e) => setWhatsAppPhone(e.target.value)}
									/>
								</div>
							</div>
							{/* WhatsApp Phone End */}

							{/* Password */}
							<div className="row mb-3">
								<label
									htmlFor="password"
									className="col-md-4 col-form-label text-md-end">
									Password
								</label>

								<div className="col-md-6">
									<input
										id="password"
										type="password"
										className="form-control"
										name="password"
										autoComplete="current-password"
										defaultValue={supplier.password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
							</div>
							{/* Password End */}

							{/* Confirm Password */}
							<div className="row mb-3">
								<label
									htmlFor="password_confirmation"
									className="col-md-4 col-form-label text-md-end">
									Confirm Password
								</label>

								<div className="col-md-6">
									<input
										id="password_confirmation"
										type="password"
										className="form-control"
										name="password_confirmation"
										autoComplete="current-password"
										onChange={(e) => setConfirmationPassword(e.target.value)}
									/>
								</div>
							</div>
							{/* Confirm Password End */}

							{/* Supplier */}
							<div className="row mb-3">
								<label
									htmlFor="supplier-name"
									className="col-md-4 col-form-label text-md-end">
									Supplier Name
								</label>

								<div className="col-md-6">
									<input
										id="supplier-name"
										type="text"
										className="form-control"
										name="supplier-name"
										autoComplete="supplier-name"
										defaultValue={supplier.supplierName}
										onChange={(e) => setSupplierName(e.target.value)}
									/>
								</div>
							</div>
							{/* Supplier Name End */}

							{/* Supplier Type */}
							<div className="row mb-3">
								<label
									htmlFor="supplier-type"
									className="col-md-4 col-form-label text-md-end">
									Supplier Type
								</label>

								<div className="col-md-6">
									<select
										id="supplier-type"
										className="form-control"
										name="supplier-type"
										autoComplete="supplier-type"
										onChange={(e) => setSupplierType(e.target.value)}>
										<option value="">Select Supplier Type</option>
										<option
											value="Women Owned"
											selected={supplier.supplierType == "Women Owned"}>
											Women Owned
										</option>
										<option
											value="Disability"
											selected={supplier.supplierType == "Disability"}>
											Disability
										</option>
										<option
											value="General"
											selected={supplier.supplierType == "General"}>
											General
										</option>
									</select>
								</div>
							</div>
							{/* Supplier Type End */}

							{/* Countries Registered */}
							<div className="row mb-3">
								<label
									htmlFor="countries-registered"
									className="col-md-4 col-form-label text-md-end">
									Countries Registered
								</label>

								<div className="col-md-6">
									{/* Looped Items */}
									{countriesRegistered.map((country, key) => (
										<div
											key={key}
											className="d-flex mb-2">
											<input
												type="text"
												className="form-control"
												name="countries-registered"
												autoComplete="countries-registered"
												defaultValue={countriesRegistered[key]}
												onChange={(e) => {
													countriesRegistered[key] = e.target.value
													setCountriesRegistered(countriesRegistered)
												}}
											/>
											{countriesRegistered.length == key + 1 &&
												countriesRegistered.length > 1 && (
													<span
														className="text-primary fs-4 p-1"
														style={{ cursor: "pointer" }}
														onClick={() =>
															setCountriesRegistered(
																countriesRegistered.slice(0, -1)
															)
														}>
														<MinusSVG />
													</span>
												)}
											{key == 0 && (
												<span
													className="text-primary fs-4 p-1"
													style={{ cursor: "pointer" }}
													onClick={() =>
														setCountriesRegistered([...countriesRegistered, ""])
													}>
													<PlusSVG />
												</span>
											)}
										</div>
									))}
									{/* Looped Items End */}
								</div>
							</div>
							{/* Countries Registered End */}

							{/* Countries In Operation */}
							<div className="row mb-3">
								<label
									htmlFor="countries-in-operation"
									className="col-md-4 col-form-label text-md-end">
									Countries In Operation
								</label>

								<div className="col-md-6">
									{/* Looped Items */}
									{countriesInOperation.map((country, key) => (
										<div
											key={key}
											className="d-flex mb-2">
											<input
												type="text"
												className="form-control"
												name="countries-in-operation"
												autoComplete="countries-in-operation"
												defaultValue={countriesInOperation[key]}
												onChange={(e) => {
													countriesInOperation[key] = e.target.value
													setCountriesInOperation(countriesInOperation)
												}}
											/>
											{countriesInOperation.length == key + 1 &&
												countriesInOperation.length > 1 && (
													<span
														className="text-primary fs-4 p-1"
														style={{ cursor: "pointer" }}
														onClick={() =>
															setCountriesInOperation(
																countriesInOperation.slice(0, -1)
															)
														}>
														<MinusSVG />
													</span>
												)}
											{key == 0 && (
												<span
													className="text-primary fs-4 p-1"
													style={{ cursor: "pointer" }}
													onClick={() =>
														setCountriesInOperation([
															...countriesInOperation,
															"",
														])
													}>
													<PlusSVG />
												</span>
											)}
										</div>
									))}
									{/* Looped Items End */}
								</div>
							</div>
							{/* Countries In Operation End */}

							{/* Category */}
							<div className="row mb-3">
								<label
									htmlFor="category"
									className="col-md-4 col-form-label text-md-end">
									Category
								</label>

								<div className="col-md-6">
									<select
										id="category"
										className="form-control"
										name="category"
										autoComplete="category"
										onChange={(e) => setCategory(e.target.value)}>
										<option value="">Select Category</option>
										<option
											value="Services"
											selected={supplier.category == "Services"}>
											Services
										</option>
										<option
											value="Goods"
											selected={supplier.category == "Goods"}>
											Goods
										</option>
										<option
											value="Works"
											selected={supplier.category == "Works"}>
											Works
										</option>
										<option
											value="Consultancy"
											selected={supplier.category == "Consultancy"}>
											Consultancy
										</option>
									</select>
								</div>
							</div>
							{/* Category End */}

							{/* Staff */}
							<div className="row mb-3">
								<label
									htmlFor="staff"
									className="col-md-4 col-form-label text-md-end">
									Staff
								</label>

								<div className="col-md-6">
									<input
										id="staff"
										type="number"
										className="form-control"
										name="staff"
										autoComplete="staff"
										defaultValue={supplier.staff}
										onChange={(e) => setStaff(parseInt(e.target.value))}
									/>
								</div>
							</div>
							{/* Staff End */}

							{/* Directors */}
							<div className="row mb-3">
								<label
									htmlFor="directors"
									className="col-md-4 col-form-label text-md-end">
									Directors
								</label>

								<div className="col-md-6">
									{/* Looped Items */}
									{directors.map((country, key) => (
										<div
											key={key}
											className="d-flex mb-2">
											<input
												type="text"
												className="form-control"
												name="directors"
												autoComplete="directors"
												defaultValue={directors[key]}
												onChange={(e) => {
													directors[key] = e.target.value
													setDirectors(directors)
												}}
											/>
											{directors.length == key + 1 && directors.length > 1 && (
												<span
													className="text-primary fs-4 p-1"
													style={{ cursor: "pointer" }}
													onClick={() => setDirectors(directors.slice(0, -1))}>
													<MinusSVG />
												</span>
											)}
											{key == 0 && (
												<span
													className="text-primary fs-4 p-1"
													style={{ cursor: "pointer" }}
													onClick={() => setDirectors([...directors, ""])}>
													<PlusSVG />
												</span>
											)}
										</div>
									))}
									{/* Looped Items End */}
								</div>
							</div>
							{/* Directors End */}

							<h6 className="text-center">Preliminary evaluation</h6>

							<p className="text-center">
								Confirm you have the following documents
							</p>

							{/* Has Business Registration */}
							<div className="row mb-1">
								<label
									htmlFor="directors"
									className="col-md-4 col-form-label text-md-end">
									Business Registration
								</label>

								<div className="col-md-6">
									<input
										id="has-business-registration"
										type="checkbox"
										name="has-business-registration"
										className="mt-3"
										defaultChecked={supplier.hasBusinessRegistration}
										onClick={(e) =>
											setHasBusinessRegistration(!hasBusinessRegistration)
										}
									/>
								</div>
							</div>
							{/* Has Business Registration End */}

							{/* Has Business Permit */}
							<div className="row mb-1">
								<label
									htmlFor="directors"
									className="col-md-4 col-form-label text-md-end">
									Business Permit
								</label>

								<div className="col-md-6">
									<input
										id="has-business-permit"
										type="checkbox"
										name="has-business-permit"
										className="mt-3"
										defaultChecked={supplier.hasBusinessPermit}
										onClick={(e) => setHasBusinessPermit(!hasBusinessPermit)}
									/>
								</div>
							</div>
							{/* Has Business Permit End */}

							{/* Has Tax Compliance */}
							<div className="row mb-1">
								<label
									htmlFor="has-tax-compliance"
									className="col-md-4 col-form-label text-md-end">
									Tax Compliance
								</label>

								<div className="col-md-6">
									<input
										id="has-tax-compliance"
										type="checkbox"
										name="has-tax-compliance"
										className="mt-3"
										defaultChecked={supplier.hasTaxCompliance}
										onClick={(e) => setHasTaxCompliance(!hasTaxCompliance)}
									/>
								</div>
							</div>
							{/* Has Tax Compliance End */}

							{/* Has License */}
							<div className="row mb-1">
								<label
									htmlFor="has-license"
									className="col-md-4 col-form-label text-md-end">
									License
								</label>

								<div className="col-md-6">
									<input
										id="has-license"
										type="checkbox"
										name="has-license"
										className="mt-3"
										defaultChecked={supplier.hasLicense}
										onClick={(e) => setHasLicense(!hasLicense)}
									/>
								</div>
							</div>
							{/* Has License End */}
						</div>

						<div className="card-footer">
							<div className="text-end">
								<Btn2
									type="submit"
									btnText="update account"
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
