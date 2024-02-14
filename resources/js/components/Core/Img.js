import React from "react"

const Img = ({ src, width, height, className, style, alt }) => {
	return (
		<img
			src={src}
			width={width}
			height={height}
			className={className}
			style={style}
			alt={alt}
			loading="lazy"
		/>
	)
}

Img.defaultProps = {
	src: "/storage/img/party-people.png",
	alt: "image",
}

export default Img