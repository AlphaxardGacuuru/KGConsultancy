import React, { useEffect, useState } from "react"

import MyLink2 from "@/components/Core/MyLink2"
import Img from "@/components/Core/Img"
import ReviewMedia from "@/components/Core/ReviewMedia"

import BidSVG from "@/svgs/BidSVG"
import TenderSVG from "@/svgs/TenderSVG"
import ReviewSVG from "@/svgs/ReviewSVG"
import StarFilledSVG from "@/svgs/StarFilledSVG"
import StarSVG from "@/svgs/StarSVG"

const index = (props) => {
	const [tab, setTab] = useState("bids")
	const [bids, setBids] = useState([])
	const [tenders, setTenders] = useState([])
	const [reviews, setReviews] = useState([])

	useEffect(() => {
		// Set page
		props.setPage({ name: "Supplier Profile" })
		// props.get(`bids/by-user-id/${props.auth.id}`, setBids)
		// props.get(`tenders/by-user-id/${props.auth.id}`, setTenders)
		props.get(`reviews/${props.auth.supplierId}`, setReviews)
	}, [])

	const active = (activeTab) => {
		return activeTab == tab ? "bg-light" : "bg-secondary-subtle"
	}

	const activeTab = (activeTab) => {
		return activeTab == tab ? "d-block" : "d-none"
	}

	/*
	 * Add rating
	 */
	const onRate = (rating) => {
		Axios.post(`api/review-ratings`, {
			supplierId: rateId,
			rating: rating,
		})
			.then((res) => props.setMessages([res.data.message]))
			.catch((err) => props.getErrors(err))
	}

	const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	return (
		<div className="row">
			<div className="col-sm-4">
				<div className="my-card shadow mb-2 p-4 text-center">
					<center>
						<h4>{props.auth.name}</h4>
						<h6>{props.auth.phone}</h6>
						<h6>{props.auth.email}</h6>
						<h6>
							<b className="me-1">Secondary Phone:</b>
							{props.auth.secondaryPhone}
						</h6>
						<h6>
							<b className="me-1">WhatsApp Phone:</b>
							{props.auth.whatsAppPhone}
						</h6>
						<h6>
							<b className="me-1">Supplier Name:</b>
							{props.auth.supplierName}
						</h6>
						<h6>
							<b className="me-1">Supplier Type:</b>
							{props.auth.supplierType}
						</h6>
						<h6>
							<b className="me-1">Countries Registered</b>
							{props.auth.countriesRegistered.map(
								(countriesRegistered, key) => (
									<div
										key={key}
										className="bg-primary-subtle rounded-pill mb-1 px-2 w-50">
										{countriesRegistered}
									</div>
								)
							)}
						</h6>
						<h6>
							<b className="me-1">Countries In Operation</b>
							{props.auth.countriesInOperation.map(
								(countriesInOperation, key) => (
									<div
										key={key}
										className="bg-primary-subtle rounded-pill mb-1 px-2 w-50">
										{countriesInOperation}
									</div>
								)
							)}
						</h6>
						<h6>
							<b className="me-1">Category:</b>
							{props.auth.category}
						</h6>
						<h6>
							<b className="me-1">Directors</b>
							{props.auth.directors.map((director, key) => (
								<div
									key={key}
									className="bg-primary-subtle rounded-pill mb-1 px-2 w-50">
									{director}
								</div>
							))}
						</h6>
						<h6>
							<b className="me-1">Staff:</b>
							{props.auth.staff}
						</h6>
						<h6>
							<b className="me-1">Has Business Registration:</b>
							{props.auth.hasBusinessRegistration ? (
								<span className="bg-success-subtle rounded-pill px-2">Yes</span>
							) : (
								<span className="bg-danger-subtle rounded-pill px-2">No</span>
							)}
						</h6>
						<h6>
							<b className="me-1">Has Business Permit:</b>
							{props.auth.hasBusinessPermit ? (
								<span className="bg-success-subtle rounded-pill px-2">Yes</span>
							) : (
								<span className="bg-danger-subtle rounded-pill px-2">No</span>
							)}
						</h6>
						<h6>
							<b className="me-1">Has Tax Compliance:</b>
							{props.auth.hasTaxCompliance ? (
								<span className="bg-success-subtle rounded-pill px-2">Yes</span>
							) : (
								<span className="bg-danger-subtle rounded-pill px-2">No</span>
							)}
						</h6>
						<h6>
							<b className="me-1">Has License:</b>
							{props.auth.hasLicense ? (
								<span className="bg-success-subtle rounded-pill px-2">Yes</span>
							) : (
								<span className="bg-danger-subtle rounded-pill px-2">No</span>
							)}
						</h6>
						<MyLink2
							linkTo={`/supplier/${props.auth.id}/edit`}
							text="edit profile"
							className="mt-2"
						/>
					</center>
				</div>
			</div>
			<div className="col-sm-8">
				{/* Tabs */}
				<div className="d-flex justify-content-between flex-wrap mb-2">
					<div
						className={`my-card shadow-sm flex-grow-1 text-center mb-2 py-2 px-4 ${active(
							"bids"
						)}`}
						style={{ cursor: "pointer" }}
						onClick={() => setTab("bids")}>
						Bids
					</div>
					<div
						className={`my-card shadow-sm flex-grow-1 text-center mx-1 mb-2 py-2 px-4 ${active(
							"tenders"
						)}`}
						style={{ cursor: "pointer" }}
						onClick={() => setTab("tenders")}>
						Tenders
					</div>
					<div
						className={`my-card shadow-sm flex-grow-1 text-center mb-2 py-2 px-4 ${active(
							"reviews"
						)}`}
						style={{ cursor: "pointer" }}
						onClick={() => setTab("reviews")}>
						Reviews
					</div>
				</div>
				{/* Tabs End */}

				{/* Bids Tab */}
				<div className={activeTab("bids")}>
					{/* Data */}
					<div className="my-card shadow-sm p-2">
						<div className="d-flex justify-content-between">
							{/* Total */}
							<div className="d-flex justify-content-between w-100 align-items-center mx-4">
								<div>
									<span className="fs-4">{bids.length}</span>
									<h4>Total Bids</h4>
								</div>
								<div className="fs-1 py-3 px-4 bg-danger-subtle text-danger rounded-circle">
									<BidSVG />
								</div>
							</div>
							{/* Total End */}
						</div>
					</div>
					{/* Data End */}
				</div>
				{/* Bids Tab End */}

				{/* Tenders Tab */}
				<div className={activeTab("tenders")}>
					{/* Data */}
					<div className="my-card shadow-sm mb-2 p-2">
						<div className="d-flex justify-content-between">
							{/* Total */}
							<div className="d-flex justify-content-between w-100 align-items-center mx-4">
								<div>
									<span className="fs-4">{tenders.length}</span>
									<h4>Total Tenders</h4>
								</div>
								<div className="fs-1 py-3 px-4 bg-danger-subtle text-danger rounded-circle">
									<TenderSVG />
								</div>
							</div>
							{/* Total End */}
						</div>
					</div>
					{/* Data End */}
				</div>
				{/* Tenders Tab End */}

				{/* Review Tab */}
				<div className={activeTab("reviews")}>
					{/* Data */}
					<div className="my-card shadow-sm mb-2 p-2">
						<div className="d-flex justify-content-between">
							{/* Total */}
							<div className="d-flex justify-content-between w-100 align-items-center mx-4">
								<div>
									<span className="fs-4">{reviews.length}</span>
									<h4>Total Reviews</h4>
								</div>

								{/* Rating */}
								<div className="border-start border-end px-5">
									<h4 className="text-center">Rating</h4>
									<div className="d-flex justify-content-center">
										{ratings.map((rating, key) => (
											<span
												key={key}
												className="text-danger px-1">
												{props.auth.rating >= rating ? (
													<span>
														<StarFilledSVG />
													</span>
												) : (
													<span>
														<StarSVG />
													</span>
												)}
											</span>
										))}
									</div>
									<h6 className="text-center">{props.auth.ratings} ratings</h6>
									{/* Rating End */}
								</div>
								<div className="fs-1 py-3 px-4 bg-danger-subtle text-danger rounded-circle">
									<ReviewSVG />
								</div>
							</div>
							{/* Total End */}
						</div>
					</div>
					{/* Data End */}

					<hr className="border-2 w-50 my-4 mx-auto" />

					{/* Reviews */}
					{reviews.map((review, key) => (
						<ReviewMedia
							{...props}
							key={key}
							review={review}
						/>
					))}
					{/* Reviews End */}
				</div>
				{/* Review Tab End */}
			</div>
		</div>
	)
}

export default index
