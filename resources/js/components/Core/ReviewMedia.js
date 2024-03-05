import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Img from "@/components/Core/Img"

const ReviewMedia = (props) => {
	const [hasLiked, setHasLiked] = useState(props.review.hasLiked)

	return (
		<div>
			<div className="d-flex">
				<div className="py-2">
					<div className="avatar-thumbnail-xs">
						<Img
							src={props.review.avatar}
							className="rounded-circle"
							width="40em"
							height="40em"
						/>
					</div>
				</div>
				<div
					className="p-1 flex-grow-1"
					style={{ textAlign: "left" }}>
					<h6
						className="media-heading m-0"
						style={{
							width: "100%",
							whiteSpace: "nowrap",
							overflow: "hidden",
							textOverflow: "clip",
						}}>
						<b>{props.review.name}</b>
						<small>
							<b>
								<i className="float-end text-secondary me-1">
									{props.review.createdAt}
								</i>
							</b>
						</small>
					</h6>
					<p className="mb-0">{props.review.text}</p>

					<small className="ms-1">{props.review.reviews}</small>
				</div>
			</div>
		</div>
	)
}

export default ReviewMedia
