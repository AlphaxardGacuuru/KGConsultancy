import React from "react"
import { Link } from "react-router-dom"

const MyLink = ({ text, linkTo, className, icon }) => (
	<Link
		to={linkTo}
		className={`btn btn-outline-primary rounded text-capitalize ${className}`}>
		<span className="p-0">{icon}</span>
		<span className="p-0">{text}</span>
	</Link>
)

MyLink.defaultProps = {
	linkTo: "/",
}

export default MyLink
