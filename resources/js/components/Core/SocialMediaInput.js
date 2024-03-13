import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
// import Axios from "axios"
import Picker from "emoji-picker-react"

import Button from "@/components/Core/Btn"
import Img from "@/components/Core/Img"

import EmojiSVG from "@/svgs/EmojiSVG"

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
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size"
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"

// Register the plugins
registerPlugin(
	FilePondPluginImageExifOrientation,
	FilePondPluginImagePreview,
	FilePondPluginFileValidateType,
	FilePondPluginImageCrop,
	FilePondPluginImageTransform,
	FilePondPluginFileValidateSize
)

const SocialMediaInput = (props) => {
	const history = useHistory()

	const [text, setText] = useState(props.text ? props.text : "")

	const [showEmojiPicker, setShowEmojiPicker] = useState(false)
	const [showAttachmentPicker, setShowAttachmentPicker] = useState(false)
	const [loading, setLoading] = useState(false)

	const onEmojiClick = (event, emojiObject) => {
		setText(text + emojiObject.emoji)
	}

	// Handle form submit for Social Input
	const onSubmit = (e) => {
		e.preventDefault()
		// Show loader
		setLoading(true)

		// Add form data to FormData object
		const formData = new FormData()
		text && formData.append("text", text)
		props.id && formData.append("id", props.id)
		props.to && formData.append("to", props.to)
		props.editing && formData.append("_method", "PUT")

		// Get csrf cookie from Laravel inorder to send a POST request
		Axios.post(`/api/${props.urlTo}`, formData)
			.then((res) => {
				// Hide loader
				setLoading(false)
				// Messages
				props.setMessages([res.data.message])
				// Update State
				props.stateToUpdate && props.stateToUpdate()
				// Clear text unless editing
				!props.editing && setText("")
				// Hide Pickers
				setShowEmojiPicker(false)
				// Redirect
				props.redirect && history.push(props.redirect)
			})
			.catch((err) => {
				setLoading(false)
				props.getErrors(err)
			})
	}

	return (
		<form
			onSubmit={onSubmit}
			className="my-card form-control bg-white mx-auto col-lg-6"
			autoComplete="off">
			<center>
				<div className="d-flex p-1">
					{/* Profile pic */}
					<div className="p-2">
						<Img
							src={props.auth.avatar}
							className="rounded-circle"
							width="25px"
							height="25px"
							alt="Avatar"
						/>
					</div>
					{/* Profile pic End */}
					{/* Input */}
					<div className="flex-grow-1">
						<textarea
							name="post-text"
							className="form-control bg-white border-0 m-0 p-2"
							style={{
								outline: "none",
								height: "40px",
								resize: "none",
							}}
							placeholder={props.placeholder}
							value={text}
							row="1"
							onChange={(e) => setText(e.target.value)}
							required={props.required}></textarea>
					</div>
					{/* Input End */}
					{/* Emoji icon */}
					<div className="pt-2 px-2">
						<div
							className={`fs-5 ${showEmojiPicker && "text-primary"}`}
							style={{ cursor: "pointer" }}
							onClick={() => {
								setShowEmojiPicker(!showEmojiPicker)
							}}>
							<EmojiSVG />
						</div>
					</div>
					{/* Emoji icon End */}
					{/* Button */}
					<div className="p-1">
						<Button
							type="submit"
							btnclassName="btn-outline-dark"
							btnText={props.btnText}
							loading={loading}
						/>
					</div>
					{/* Button End */}
				</div>

				{/* Show Emoji Picker */}
				{showEmojiPicker && (
					<div>
						<Picker
							onEmojiClick={onEmojiClick}
							preload="true"
							pickerStyle={{
								width: "95%",
								borderRadius: "0px",
								margin: "10px",
							}}
						/>
						<br />
					</div>
				)}
				{/* Show Emoji Picker End */}
			</center>
		</form>
	)
}

SocialMediaInput.defaultProps = {
	required: true,
	btnText: "send",
}

export default SocialMediaInput
