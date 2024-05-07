import React, { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"

import Btn from "@/components/Core/Btn"
import MyLink from "@/components/Core/MyLink"

import SocialMediaInput from "@/components/Core/SocialMediaInput"

import StarFilledSVG from "@/svgs/StarFilledSVG"
import StarSVG from "@/svgs/StarSVG"

const create = (props) => {
	const { id } = useParams()
	const router = useHistory()

	const [supplier, setSupplier] = useState({})

	const [hasRated, setHasRated] = useState()
	const [text, setText] = useState("")
	const [loading, setLoading] = useState()

	const ratings = [1, 2, 3, 4, 5]

	useEffect(() => {
		// Set page
		props.setPage({ name: "Create Review", path: ["reviews"] })
		// Fetch Supplier
		props.get(`suppliers/${id}`, setSupplier)
	}, [])

	/*
	 * Add rating
	 */
	const onRate = (rating) => {
		Axios.post(`api/ratings`, {
			supplierId: id,
			rating: rating,
		})
			.then((res) => props.setMessages([res.data.message]))
			.catch((err) => props.getErrors(err))
	}

	return (
		<div className="row">
			<div className="col-sm-2"></div>
			<div className="col-sm-8">
				<div className="card">
					<div className="card-header">
						<h4>Review {supplier.name}</h4>
					</div>
					<div className="card-body">
						{/* Rating */}

						<div className="d-flex justify-content-center mb-2 p-2">
							{ratings.map((rating, key) => (
								<div
									key={key}
									className="p-1"
									style={{ cursor: "pointer" }}
									onClick={() => {
										// Check if rating exists
										if (hasRated) {
											setHasRated()
										} else {
											// Change UI
											setHasRated(rating)
										}
										onRate(rating)
									}}>
									{hasRated == rating ? (
										<span className="text-primary">
											<StarFilledSVG />
										</span>
									) : (
										<span>
											<StarSVG />
										</span>
									)}
								</div>
							))}
						</div>
						{/* Rating End */}

						{/* Social Media Input */}
						<SocialMediaInput
							{...props}
							to={id}
							placeholder="Write a Review"
							showImage={false}
							showPoll={false}
							urlTo="reviews"
							editing={false}
						/>
						{/* Social Media Input End */}
					</div>
					<div className="card-footer">
						<MyLink
							linkTo="/"
							text="back to website"
						/>
					</div>
				</div>
			</div>
			<div className="col-sm-2"></div>
		</div>
	)
}

export default create
