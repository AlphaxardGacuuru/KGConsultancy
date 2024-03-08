import React, { useEffect, useState } from "react"
// import Axios from "axios"
import { Link, useHistory } from "react-router-dom"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond"

// Import FilePond styles
import "filepond/dist/filepond.min.css"

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation"
import FilePondPluginImagePreview from "filepond-plugin-image-preview"
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
import FilePondPluginImageCrop from "filepond-plugin-image-crop"
import FilePondPluginImageTransform from "filepond-plugin-image-transform"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

// Register the plugins
registerPlugin(
	FilePondPluginImageExifOrientation,
	FilePondPluginImagePreview,
	FilePondPluginFileValidateType,
	FilePondPluginImageCrop,
	FilePondPluginImageTransform
)

const create = (props) => {
	const router = useHistory()

	// Declare states
	const [roles, setRoles] = useState([])
	const [userRoles, setUserRoles] = useState([])
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [btnLoading, setBtnLoading] = useState()

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
		Axios.post(`/api/admin/admins`, {
			name: name,
			email: email,
			phone: phone,
			userRoles: userRoles,
		})
			.then((res) => {
				// Remove loader for button
				setBtnLoading(false)
				props.setMessages([res.data.message])
				// Redirect
				setTimeout(() => router.push("/admin/staff"), 500)
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
						<h1>Create Staff</h1>
						<br />
						{/* <label htmlFor="">Profile Pic</label>
							<div className="avatar-container mb-4">
							<FilePond
								name="filepond-avatar"
								labelIdle='Drag & Drop your Image or <span class="filepond--label-action text-dark"> Browse </span>'
								stylePanelLayout="compact circle"
								imageCropAspectRatio="1:1"
								acceptedFileTypes={["image/*"]}
								stylePanelAspectRatio="1:1"
								allowRevert={false}
								server={{
									url: `/api/filepond/admins`,
									process: {
										url: `/avatar`,
										onload: (res) => {
											props.setMessages([JSON.parse(res).message])
										},
										onerror: (err) => console.log(err.response),
									},
								}}
							/>
						</div> */}

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
								placeholder="John"
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
								placeholder="john@gmail.com"
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
								placeholder="0700123456"
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
													onChange={(e) => handleSetUserRoles(role.id)}
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

export default create
