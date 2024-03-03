import React, { useEffect, useState } from "react"

import MyLink2 from "@/components/Core/MyLink2"
import Img from "@/components/Core/Img"

import BidSVG from "@/svgs/BidSVG"
import TenderSVG from "@/svgs/TenderSVG"
import ReviewSVG from "@/svgs/ReviewSVG"

const index = (props) => {
	const [tab, setTab] = useState("bids")
	const [bids, setBids] = useState([])
	const [tenders, setTenders] = useState([])
	const [review, setReview] = useState([])

	useEffect(() => {
		// Set page
		// props.get(`bids/by-user-id/${props.auth.id}`, setBids)
		// props.get(`tenders/by-user-id/${props.auth.id}`, setTenders)
		// props.get(`reviews/by-user-id/${props.auth.id}`, setReviews)
	}, [])

	const active = (activeTab) => {
		return activeTab == tab ? "bg-light" : "bg-secondary-subtle"
	}

	const activeTab = (activeTab) => {
		return activeTab == tab ? "d-block" : "d-none"
	}

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
										className="bg-primary-subtle rounded-pill px-2 w-50">
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
										className="bg-primary-subtle rounded-pill px-2 w-50">
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
									className="bg-primary-subtle rounded-pill px-2 w-50">
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
								<span className="bg-danger">No</span>
							)}
						</h6>
						<h6>
							<b className="me-1">Has Business Permit:</b>
							{props.auth.hasBusinessPermit ? (
								<span className="bg-success-subtle rounded-pill px-2">Yes</span>
							) : (
								<span className="bg-danger">No</span>
							)}
						</h6>
						<h6>
							<b className="me-1">Has Tax Compliance:</b>
							{props.auth.hasTaxCompliance ? (
								<span className="bg-success-subtle rounded-pill px-2">Yes</span>
							) : (
								<span className="bg-danger">No</span>
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
							linkTo={`/profile/${props.auth.id}/edit`}
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
							"review"
						)}`}
						style={{ cursor: "pointer" }}
						onClick={() => setTab("review")}>
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
				<div className={activeTab("review")}>
					{/* Data */}
					<div className="my-card shadow-sm mb-2 p-2">
						<div className="d-flex justify-content-between">
							{/* Total */}
							<div className="d-flex justify-content-between w-100 align-items-center mx-4">
								<div>
									<span className="fs-4">{review.length}</span>
									<h4>Total Reviews</h4>
								</div>
								<div className="fs-1 py-3 px-4 bg-danger-subtle text-danger rounded-circle">
									<ReviewSVG />
								</div>
							</div>
							{/* Total End */}
						</div>
					</div>
					{/* Data End */}
				</div>
				{/* Review Tab End */}
			</div>
		</div>
	)
}

export default index
