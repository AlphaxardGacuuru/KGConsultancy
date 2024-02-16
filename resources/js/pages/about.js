import React, { useEffect } from "react"
import { Link } from "react-router-dom"

const About = () => {
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
						src="storage/img/bg-img/about.jpg"
						loading="lazy"
						alt="creator"
					/>
				</div>
				<div
					className="col-sm-6 text-center"
					style={{ backgroundColor: "#3C1712" }}>
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
								Empowerment through Procurement Excellence
							</h2>
							<p className="text-white">
								We envision ourselves as the premier procurement consulting
								company, acting as the vital bridge between suppliers and
								organizations to mitigate risks and streamline the procurement
								process. Our commitment lies in enhancing procurement
								compliance, strengthening partnerships between suppliers and
								companies/organizations, and continually redefining procurement
								applications to align with current market trends.
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

			<div
				className="sonar-about-us-area bg-img"
				style={{ backgroundImage: "url(storage/img/bg-img/about2.jpg)" }}>
				{/* <!-- Back End Content --> */}
				<div className="backEnd-content">
					<h2>Dream</h2>
				</div>

				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-10 col-lg-7">
							<div className="about-us-content bg-white text-center">
								{/* Top Line */}
								<div
									className="mt-5 mb-3"
									style={{ backgroundColor: "#3C1712", height: "1px" }}></div>
								{/* Top Line End */}

								<h2>Strategic Partnership Development</h2>
								<p>
									We strive to foster enduring partnerships by building a
									unified supplier base market in Africa, specifically designed
									and accessible to African companies and organizations through
									our innovative KG-ASB system. Our goal is to establish a
									robust network that promotes synergy and collaboration,
									ultimately contributing to sustainable business growth.
								</p>

								{/* Top Line */}
								<div
									className="mt-5 mb-3"
									style={{ backgroundColor: "#3C1712", height: "1px" }}></div>
								{/* Top Line End */}

								<h2>Optimizing Procurement Performance</h2>
								<p>
									At the core of our vision is the optimization of procurement
									performance. We are dedicated to verifying suppliers who not
									only meet the key performance indicators (KPIs) of
									organizations and companies but also align with our commitment
									to excellence. Our aim is to provide a curated list of
									suppliers that comply with the specific procurement
									requirements of each organization or company, ensuring a
									seamless and efficient procurement experience.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="sonar-about-us-area second-part bg-img"
				style={{ backgroundImage: "url(storage/img/bg-img/about3.jpg)" }}>
				{/* <!-- Back End Content --> */}
				<div className="backEnd-content">
					<h2>Really</h2>
				</div>

				<div className="container-fluid">
					<div className="row justify-content-end">
						<div className="col-12 col-md-10 col-lg-7">
							<div className="about-us-content bg-white">
								<div
									className="section-heading text-left wow fadeInUp"
									data-wow-delay="300ms">
									<div className="line"></div>
									<h3
										className="wow fadeInUp"
										data-wow-delay="600ms">
										Our Qualities
									</h3>
								</div>
								{/* <!-- Progress Bar Content Area --> */}
								<div
									className="services-progress-bar mt-50 wow fadeInUp"
									data-wow-delay="900ms">
									<div
										className="progress rounded-0"
										style={{ height: "30px" }}>
										<div
											className="progress-bar"
											style={{ backgroundColor: "#3C1712", width: "100%" }}>
											<span
												className="p-2"
												style={{ textAlign: "right" }}>
												{" "}
												100%
											</span>
										</div>
									</div>
									<h6>Supplier Relationship Management</h6>
									<br />
									<div
										className="progress rounded-0"
										style={{ height: "30px" }}>
										<div
											className="progress-bar"
											style={{ backgroundColor: "#3C1712", width: "100%" }}>
											<span
												className="p-2"
												style={{ textAlign: "right" }}>
												{" "}
												100%
											</span>
										</div>
									</div>
									<h6>Compliance and Ethics</h6>
									<br />
									<div
										className="progress rounded-0"
										style={{ height: "30px" }}>
										<div
											className="progress-bar"
											style={{ backgroundColor: "#3C1712", width: "95%" }}>
											<span
												className="p-2"
												style={{ textAlign: "right" }}>
												{" "}
												90%
											</span>
										</div>
									</div>
									<h6>Data Analytics</h6>
									<br />
									<div
										className="progress rounded-0"
										style={{ height: "30px" }}>
										<div
											className="progress-bar"
											style={{ backgroundColor: "#3C1712", width: "85%" }}>
											<span
												className="p-2"
												style={{ textAlign: "right" }}>
												{" "}
												85%
											</span>
										</div>
									</div>
									<h6>Cross-Functional Collaboration</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
