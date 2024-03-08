import React from "react"
import { Link } from "react-router-dom"

const MyLink = ({ text, linkTo, className }) => (
	<Link
		to={linkTo}
		className={`btn btn-outline-danger rounded text-capitalize ${className}`}>
		{text}
	</Link>
)

MyLink.defaultProps = {
	linkTo: "/",
}

export default MyLink
