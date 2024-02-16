import React, { useEffect } from "react"

import { Link } from "react-router-dom"

const Services = () => {
	useEffect(() => {
		// Slide on page load
		// Get the animated div
		const animatedDiv = document.getElementById("animatedDiv")

		// Add the 'active' class after a short delay (adjust as needed)
		setTimeout(function () {
			animatedDiv.classList.add("active")
		}, 500) // 500 milliseconds delay
	}, [])

	return (
		<div>
			{/* <!-- ***** Hero Area Start ***** --> */}
			<div className="row">
				<div className="col-sm-6 p-0">
					<img
						src="storage/img/bg-img/blog.jpg"
						alt="creator"
					/>
				</div>
				<div
					className="col-sm-6 text-center"
					style={{ backgroundColor: "#234458" }}>
					<div className="d-flex justify-content-center my-5 py-5">
						<div
							id="animatedDiv"
							className="p-5 slide-in">
							{/* Top Line */}
							<div
								className="m-3"
								style={{ backgroundColor: "white", height: "1px" }}></div>
							{/* Top Line End */}

							<h2 className="text-white">
								Transforming Procurement Excellence
							</h2>
							<p className="text-white">
								We specialize in connecting businesses and organizations with
								suppliers that meet stringent requirements, ensuring compliance
								with organizational and company standards while delivering
								unparalleled Value for Money. Elevate your procurement processes
								with our trusted and efficient solutions.
							</p>
						</div>
					</div>
					<Link
						to="/contact"
						className="btn sonar-btn white-btn">
						contact us
					</Link>
				</div>
			</div>
			{/* <!-- ***** Hero Area End ***** --> */}

			{/* <!-- ***** Services Area Start ***** --> */}
			<div className="sonar-services-area section-padding-100-50">
				<div className="container">
					<div className="row">
						<h1 className="text-center">Expert Services</h1>
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="300ms">
								<center>
									<h4>Policies and Standard Operating Procedures (SoPs)</h4>
									<div>
										Design and development of comprehensive manuals and
										handbooks.
									</div>
									<div>
										Crafting a Supplier Handbook with a clear message to
										suppliers; a prerequisite for suppliers seeking
										collaboration with your organization, aligning with
										established standards (referencing the Wartsila Handbook).
									</div>
									<div>
										Ongoing review and continuous improvement of policies and
										SoPs.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Tools and Templates</h4>
									<div>
										Development and design of essential tools and templates.
									</div>
									<div>
										Regular review and enhancement of tools and templates for
										sustained efficiency.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Procurement Processes</h4>
									<div>
										Seamless execution of organizational and company procurement
										processes, managing procurement cycle from request to
										payment.
									</div>
									<div>
										Establishment of a harmonious partnership between suppliers
										and the organization/company.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>In-House Capacity Building</h4>
									<div>
										Skill enhancement for organizational and company procurement
										specialists, with a focus on business cases.
									</div>
									<div>
										Capacity building initiatives to elevate the submission
										standards of your current suppliers.
									</div>
									<div>
										Empowering organizational/company staff with enhanced skills
										in line with best procurement practices.
									</div>
								</center>
							</div>
						</div>
					</div>
					{/* <!-- Service Item End --> */}
					<div className="row">
						<h1 className="text-center">Supplier Services</h1>
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Empowering for Compliance and Performance</h4>
									<div>
										Provide guidance to suppliers on aligning with
										organizational and company requirements.
									</div>
									<div>
										Facilitate training to enhance supplier capabilities,
										ensuring they meet performance expectations.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Procurement Process Submission Training</h4>
									<div>
										Conduct workshops on preparation of Request for Quotation
										(RFQ), Request for Proposal (RFP), and Invitation to Bid
										(ITB) processes.
									</div>
									<div>
										Offer specialized training to suppliers for effective and
										streamlined submissions.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Strategic Supplier Sourcing</h4>
									<div>
										• Utilize our network and expertise to identify and connect
										suppliers with organizations and companies seeking their
										specific services.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Vetting of Eligible Suppliers</h4>
									<div>
										Implement a thorough vetting process to ensure suppliers
										meet eligibility criteria.
									</div>
									<div>
										Assist in preparing suppliers for the vetting process,
										addressing potential gaps in compliance.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Complaint Resolution</h4>
									<div>
										Establish a mechanism for suppliers to address concerns and
										complaints promptly.
									</div>
									<div>
										Offer mediation services to resolve issues between suppliers
										and organizations/companies.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Strengthening Document Application</h4>
									<div>
										Provide training on essential document requirements,
										including bank details, quotation formats, invoice formats,
										and the distinction between proforma and invoice.
									</div>
									<div>
										Offer ongoing support to ensure suppliers consistently
										adhere to document standards.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
						{/* <!-- Service Item --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2 glassy-gradient"
								data-wow-delay="600ms">
								<center>
									<h4>Comprehensive Financial Guidance</h4>
									<div>
										Deliver workshops to enhance suppliers' understanding of
										financial aspects, such as invoicing, payment terms, and
										financial documentation compliance.
									</div>
									<div>
										Guide suppliers in optimizing their financial processes to
										align with industry best practices.
									</div>
								</center>
							</div>
						</div>
						{/* <!-- Service Item End --> */}
					</div>
				</div>
			</div>
			{/* <!-- ***** Services Area End ***** --> */}

			<div
				className="sonar-testimonials-area bg-img"
				style={{ backgroundImage: "url(img/bg-img/tes.jpg)" }}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-10 col-lg-7">
							<div className="testimonial-content bg-white">
								<div className="section-heading text-left">
									<div className="line"></div>
									<h2>Goals</h2>

									<div className="my-1">
										<b>Breakdown of our future goals: </b>As K&G Consulting, our
										primary goal is to establish ourselves as the foremost
										authority in procurement consulting, setting industry
										standards for excellence and innovation.
									</div>
									<div className="my-1">
										<b>Global Impact: </b>We aspire to expand our influence
										globally, leveraging the KG-ASB system to create unified
										supplier base markets not only in Africa but also in other
										regions, fostering accessibility and collaboration on a
										worldwide scale.
									</div>
									<div className="my-1">
										<b>Optimized Procurement Practices: </b>Our commitment is to
										continuously evolve and refine procurement processes,
										striving for optimization by verifying suppliers against key
										performance indicators, ensuring efficiency, and aligning
										with the highest standards of excellence.
									</div>
									<div className="my-1">
										<b>Sustainable Partnerships: </b>We aim to foster enduring
										partnerships between suppliers and organizations,
										contributing to sustainable business growth and development
										while actively promoting accessibility and inclusivity.
									</div>
									<div className="my-1">
										<b>Community Empowerment: </b>Beyond business success, our
										ideal is to contribute to the empowerment of communities by
										facilitating fair and ethical procurement practices,
										creating a positive impact on both local and global scales.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="cool-facts-area section-padding-100-0">
				<div className="container">
					<div className="row align-items-center">
						{/* <!-- Single Cool Fact--> */}
						<div className="col-12 col-sm-6 col-lg-3">
							<div
								className="single-cool-fact-area text-center mb-100 wow fadeInUpBig"
								data-wow-delay="250ms">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="80"
									height="80"
									fill="currentColor"
									className="bi bi-person"
									viewBox="0 0 16 16">
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
								</svg>
								<h2>
									<span className="counter">61</span>
								</h2>
								<h6>Happy Clients</h6>
							</div>
						</div>
						{/* <!-- Single Cool Fact--> */}
						<div className="col-12 col-sm-6 col-lg-3">
							<div
								className="single-cool-fact-area text-center mb-100 wow fadeInUpBig"
								data-wow-delay="500ms">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="80"
									height="80"
									fill="currentColor"
									className="bi bi-laptop"
									viewBox="0 0 16 16">
									<path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
								</svg>
								<h2>
									<span className="counter">100</span>
								</h2>
								<h6>Hours of Service</h6>
							</div>
						</div>
						{/* <!-- Single Cool Fact--> */}
						<div className="col-12 col-sm-6 col-lg-3">
							<div
								className="single-cool-fact-area text-center mb-100 wow fadeInUpBig"
								data-wow-delay="750ms">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="80"
									height="80"
									fill="currentColor"
									className="bi bi-images"
									viewBox="0 0 16 16">
									<path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
									<path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
								</svg>
								<h2>
									<span className="counter">1400</span>
								</h2>
								<h6>Bids</h6>
							</div>
						</div>
						{/* <!-- Single Cool Fact--> */}
						<div className="col-12 col-sm-6 col-lg-3">
							<div
								className="single-cool-fact-area text-center mb-100 wow fadeInUpBig"
								data-wow-delay="1000ms">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="80"
									height="80"
									fill="currentColor"
									className="bi bi-cup"
									viewBox="0 0 16 16">
									<path d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z" />
								</svg>
								<h2>
									<span className="counter">120</span>
								</h2>
								<h6>Teas a month</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
