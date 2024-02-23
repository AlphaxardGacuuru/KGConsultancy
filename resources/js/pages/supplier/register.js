import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import CryptoJS from "crypto-js"

import Btn from "@/components/core/Btn"

import PlusSVG from "@/svgs/PlusSVG"
import CloseSVG from "@/svgs/CloseSVG"
import MinusSVG from "@/svgs/MinusSVG"

const register = (props) => {
	const router = useHistory()

	const [name, setName] = useState()
	const [phone, setPhone] = useState()
	const [secondaryPhone, setSecondaryPhone] = useState()
	const [whatsAppPhone, setWhatsAppPhone] = useState()
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [confirmationPassword, setConfirmationPassword] = useState()
	const [supplierName, setSupplierName] = useState()
	const [supplierType, setSupplierType] = useState()
	const [countriesRegistered, setCountriesRegistered] = useState([""])
	const [countriesInOperation, setCountriesInOperation] = useState([""])
	const [category, setCategory] = useState()
	const [staff, setStaff] = useState()
	const [directors, setDirectors] = useState([""])
	const [hasBusinessRegistration, setHasBusinessRegistration] = useState(false)
	const [hasBusinessPermit, setHasBusinessPermit] = useState(false)
	const [hasTaxCompliance, setHasTaxCompliance] = useState(false)
	const [hasLicense, setHasLicense] = useState(false)
	const [loading, setLoading] = useState()

	useEffect(() => {
		if (props.auth.name != "Guest") {
			// Handle Redirects
			if (props.auth.accountType == "supplier") {
				router.push("/supplier")
			} else {
				router.push("/admin")
			}
		}
	}, [])

	// Encrypt Token
	const encryptedToken = (token) => {
		const secretKey = "KGConsultancyAuthorizationToken"
		// Encrypt
		return CryptoJS.AES.encrypt(token, secretKey).toString()
	}

	/*
	 * Submit
	 */
	const onSubmit = (e) => {
		setLoading(true)
		e.preventDefault()

		Axios.post("/register", {
			name: name,
			phone: phone,
			secondaryPhone: secondaryPhone,
			whatsAppPhone: whatsAppPhone,
			email: email,
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
				props.setMessages(["Account Updated"])
				// Encrypt and Save Sanctum Token to Local Storage
				props.setLocalStorage("sanctumToken", encryptedToken(res.data.data))
				// Update Logged in user
				Axios.get("/api/auth", {
					headers: { Authorization: `Bearer ${res.data.data}` },
				})
					.then((res) => {
						// Set LocalStorage
						props.setLocalStorage("auth", res.data.data)
						window.location.reload()
						// Redirect to Home
						setTimeout(() => router.push("/supplier"), 500)
					})
					.catch((err) => props.getErrors(err, false))
			})
			.catch((err) => {
				setLoading(false)
				// Get Errors
				props.getErrors(err)
			})
	}

	return (
		<div className="container mt-5">
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<div className="card">
						<div
							className="card-header text-white"
							style={{ backgroundColor: "#234458" }}>
							Register
						</div>

						<div className="card-body">
							<form onSubmit={onSubmit}>
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
											required={true}
										/>
									</div>
								</div>
								{/* Name End */}

								{/* Email */}
								<div className="row mb-3">
									<label
										htmlFor="email"
										className="col-md-4 col-form-label text-md-end">
										Email Address
									</label>

									<div className="col-md-6">
										<input
											id="email"
											type="email"
											className="form-control"
											name="email"
											autoComplete="email"
											required={true}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
								{/* Email End */}

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
											onChange={(e) => setPhone(e.target.value)}
											required={true}
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
											onChange={(e) => setSecondaryPhone(e.target.value)}
											required={true}
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
											onChange={(e) => setWhatsAppPhone(e.target.value)}
											required={true}
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
											required
											autoComplete="current-password"
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
											required={true}
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
											onChange={(e) => setSupplierName(e.target.value)}
											required={true}
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
										<input
											id="supplier-type"
											type="text"
											className="form-control"
											name="supplier-type"
											autoComplete="supplier-type"
											onChange={(e) => setSupplierType(e.target.value)}
											required={true}
										/>
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
													onChange={(e) => {
														countriesRegistered[key] = e.target.value
														setCountriesRegistered(countriesRegistered)
													}}
													required={true}
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
															setCountriesRegistered([
																...countriesRegistered,
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
													onChange={(e) => {
														countriesInOperation[key] = e.target.value
														setCountriesInOperation(countriesInOperation)
													}}
													required={true}
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
										<input
											id="category"
											type="text"
											className="form-control"
											name="category"
											autoComplete="category"
											onChange={(e) => setCategory(e.target.value)}
											required={true}
										/>
									</div>
								</div>
								{/* Category End */}

								{/* Staff */}
								<div className="row mb-3">
									<label
										htmlFor="staff"
										className="col-md-4 col-form-label text-md-end">
										Supplier Type
									</label>

									<div className="col-md-6">
										<input
											id="staff"
											type="number"
											className="form-control"
											name="staff"
											autoComplete="staff"
											onChange={(e) => setStaff(parseInt(e.target.value))}
											required={true}
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
													onChange={(e) => {
														directors[key] = e.target.value
														setDirectors(directors)
													}}
													required={true}
												/>
												{directors.length == key + 1 &&
													directors.length > 1 && (
														<span
															className="text-primary fs-4 p-1"
															style={{ cursor: "pointer" }}
															onClick={() =>
																setDirectors(directors.slice(0, -1))
															}>
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
											onChange={(e) =>
												setHasBusinessRegistration(e.target.value)
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
											onChange={(e) => setHasBusinessPermit(e.target.value)}
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
											onChange={(e) => setHasTaxCompliance(e.target.value)}
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
											onChange={(e) => setHasLicense(e.target.value)}
										/>
									</div>
								</div>
								{/* Has License End */}

								<div className="row mb-0">
									<div className="col-md-8 offset-md-8">
										<Btn
											type="submit"
											btnText="create account"
											loading={loading}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default register
