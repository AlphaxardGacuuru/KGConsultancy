import React from "react"

const Btn = ({
	btnStyle,
	btnClass,
	btnText,
	icon,
	onClick,
	loading,
	disabled,
}) => (
	<button
		style={btnStyle}
		className={`btn rounded text-capitalize ${btnClass}`}
		onClick={onClick}
		disabled={disabled}>
		<span className="p-0">{icon}</span>
		<span className="p-0">{btnText}</span>
		{loading && (
			<div
				className="spinner-border spinner-border-sm border-2 my-auto mx-2"
				style={{ color: "inherit" }}></div>
		)}
	</button>
)

Btn.defaultProps = {
	btnClass: "btn-danger text-white",
	loading: false,
	disabled: false,
}

export default Btn
