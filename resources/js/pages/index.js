import React from "react"
import { Link } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"

const Index = () => {
	// Images array
	const images = [
		{
			src: "storage/img/bg-img/carousel-1.jpeg",
			heading: "Revolutionize Your Sourcing Strategy",
			tag: "Empower your business with cutting-edge procurement solutions. Streamline operations, reduce costs, and gain a competitive edge in the market. Explore a smarter way to source with us.",
		},
		{
			src: "storage/img/bg-img/carousel-2.avif",
			heading: "Strategic Procurement Excellence",
			tag: "Unlock the full potential of your procurement process. Our strategic solutions are designed to elevate your sourcing game, providing unmatched efficiency, transparency, and savings.",
		},
		{
			src: "storage/img/bg-img/carousel-3.webp",
			heading: "Smart Buying, Smart Business",
			tag: "Navigate the complexities of procurement effortlessly. Our platform empowers you to make informed decisions, optimize costs, and drive sustainable growth. Experience procurement reimagined.",
		},
		{
			src: "storage/img/bg-img/carousel-4.webp",
			heading: "Sustainable Sourcing Solutions",
			tag: "Embrace sustainability in your supply chain. Our procurement tools enable responsible sourcing, helping you build a resilient and eco-friendly procurement strategy for a better tomorrow.",
		},
		{
			src: "storage/img/bg-img/carousel-5.jpeg",
			heading: "Innovative Procurement Technologies",
			tag: "Stay ahead with the latest in procurement tech. Leverage innovation to streamline workflows, enhance collaboration, and stay agile in a rapidly changing business landscape.",
		},
		{
			src: "storage/img/bg-img/carousel-6.webp",
			heading: "Your Trusted Procurement Partner",
			tag: "Count on us as your strategic ally in procurement. With a commitment to excellence and unmatched expertise, we are here to support your procurement journey at every step.",
		},
	]

	return (
		<div>
			{/* <!-- ***** Hero Area Start ***** --> */}
			<Carousel controls={true}>
				{images.map((image, key) => (
					<Carousel.Item
						key={key}
						interval={3000}>
						<img
							className="d-block w-100"
							src={image.src}
							style={{ maxHeight: "90vh", display: "block", margin: "auto" }}
							alt="First slide"
							loading="lazy"
						/>
						<Carousel.Caption>
							<h3 className="text-white">{image.heading}</h3>
							<p className="text-white">{image.tag}</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
			{/* <!-- ***** Hero Area End ***** --> */}

			<br />
			<br />

			{/* <!-- ***** Call to Action Area Start ***** --> */}
			<div className="sonar-call-to-action-area section-padding-0-100">
				<div className="backEnd-content">
					<h2>K&G</h2>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="call-to-action-content wow fadeInUp"
								data-wow-delay="0.5s">
								<h2>
									"Elevating <b>Procurement</b> Excellence"
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ***** Call to Action Area End ***** --> */}

			<div
				className="sonar-testimonials-area bg-img"
				style={{ backgroundImage: "url(storage/img/bg-img/tes.jpg)" }}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-10 col-lg-7">
							<div className="testimonial-content bg-white">
								<div className="section-heading text-left">
									<div className="line"></div>
									<h2>KG Consulting Mission and Vision</h2>
								</div>

								<div className="single-tes-slide">
									<h5>Mission</h5>
									<h6>
										Facilitating connection of companies and organizations with
										efficient procurement practices and suppliers that adhere to
										standards and offer optimal value for money.
									</h6>
								</div>
								<br />
								<br />

								<div className="single-tes-slide">
									<h5>Vision</h5>
									<h6>
										Elevating Procurement Excellence:
										<br />
										As a premier procurement consulting company, we envision
										revolutionizing organization and supplier partnership,
										pioneering value-for-money procurement solutions, and
										delivering strategic procurement initiatives. Our commitment
										is to empower organizations with efficient, transparent, and
										innovative procurement practices, ensuring sustained growth
										and unparalleled value creation.
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- ***** Hero Area Start ***** --> */}
			<div className="row mt-5">
				<div
					className="col-sm-12 p-5"
					style={{ backgroundColor: "#3C1712" }}>
					<center>
						<h1 style={{ color: "white" }}>About Us</h1>
					</center>
				</div>
			</div>
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
						<div className="p-5">
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
						to="/about"
						className="btn sonar-btn white-btn">
						See More
					</Link>
				</div>
			</div>
			{/* <!-- ***** Hero Area End ***** --> */}

			{/* <!-- ***** Services Area Start ***** --> */}
			<div className="sonar-services-area">
				<div className="container">
					<div className="row">
						<div className="col-sm-12 mt-5 mb-3">
							<center>
								<h1>Services</h1>
							</center>
						</div>
					</div>
					<div className="row">
						{/* <!-- Wedding Photography Plus Area --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2"
								style={{ backgroundColor: "#FFC862" }}
								data-wow-delay="300ms">
								<center>
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="50"
											height="50"
											fill="currentColor"
											className="bi bi-camera-reels"
											viewBox="0 0 16 16">
											<path
												fillRule="evenodd"
												d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z"
											/>
											<path
												fillRule="evenodd"
												d="M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
											/>
											<path
												fillRule="evenodd"
												d="M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
											/>
										</svg>
									</span>
									<h4>
										Wedding Photography <br />
										Plus
									</h4>
									<span>2 Photographers</span>
									<br />
									<span>2 Cinematographers</span>
									<br />
									<span>3 A3 Mounts</span>
									<br />
									<span>1 Photo Magazine</span>
									<br />
									<span>250 Photos</span>
									<br />
									<span>Video (40mns-1.5hrs)</span>
									<br />
									<span>Trailer (6 - 12mns)</span>
									<br />
									<span>Free Engagement Shoot</span>
									<br />
									<br />
									<h5>Ksh 50,000</h5>
									<br />
									<p>
										“What i like about photographs is that they capture a moment
										that’s gone forever, impossible to reproduce.” ― Karl
										Lagerfeld.
									</p>
								</center>
							</div>
						</div>
						{/* <!-- Wedding Photography Standard Area --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2"
								style={{ backgroundColor: "#102336", color: "white" }}
								data-wow-delay="600ms">
								<center>
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="50"
											height="50"
											fill="currentColor"
											className="bi bi-camera-video"
											viewBox="0 0 16 16">
											<path
												fillRule="evenodd"
												d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
											/>
										</svg>
									</span>
									<h4 style={{ color: "white" }}>
										Wedding Photography <br />
										Standard
									</h4>
									<span>2 Photographers</span>
									<br />
									<span>1 Cinematographer</span>
									<br />
									<span>1 A3 Mount</span>
									<br />
									<span>150 Photos</span>
									<br />
									<span>Video (40mns-1.5hrs)</span>
									<br />
									<span>Trailer (6 - 12mns)</span>
									<br />
									<span>Free Engagement Shoot</span>
									<br />
									<br />
									<h5 style={{ color: "white" }}>Ksh 30,000</h5>
									<br />
									<p style={{ color: "white" }}>
										“If your pictures are not good enough you are not close
										enough.” ― Robert Capa
									</p>
								</center>
							</div>
						</div>
						{/* <!-- Wedding Photography Budget Area --> */}
						<div className="col-12 col-md-6 col-lg-4">
							<div
								className="single-services-area wow fadeInUp card py-5 px-2"
								style={{ backgroundColor: "#3C1712", color: "white" }}
								data-wow-delay="300ms">
								<center>
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="50"
											height="50"
											fill="currentColor"
											className="bi bi-camera"
											viewBox="0 0 16 16">
											<path
												fillRule="evenodd"
												d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
											/>
											<path
												fillRule="evenodd"
												d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
											/>
											<path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
										</svg>
									</span>
									<h4 style={{ color: "white" }}>
										Wedding Photography <br />
										Budget
									</h4>
									<span>1 Photographer</span>
									<br />
									<span>1 Cinematographer</span>
									<br />
									<span>100 Photos</span>
									<br />
									<span>Video (40mns-1.5hrs)</span>
									<br />
									<span>Trailer (6 - 12mns)</span>
									<br />
									<br />
									<h5 style={{ color: "white" }}>Ksh 20,000</h5>
									<br />
									<p style={{ color: "white" }}>
										A story should have a beginning, a middle and an end… but
										not necessarily in that order. – Jean-Luc Godard.
									</p>
								</center>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 p-5">
							<center>
								<Link
									to="/services"
									className="btn sonar-btn">
									see more
								</Link>
							</center>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ***** Services Area End ***** --> */}

			{/* <!-- ***** Call to Action Area Start ***** --> */}
			<div className="sonar-call-to-action-area section-padding-0-100">
				<div className="backEnd-content">
					<h2>Dream</h2>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="call-to-action-content wow fadeInUp"
								data-wow-delay="0.5s">
								<h2>I'm an experienced photographer and videographer</h2>
								<h5>Let’s talk</h5>
								<Link
									to="/contact"
									className="btn sonar-btn mt-100">
									contact me
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ***** Call to Action Area End </br>***** --> */}
		</div>
	)
}

export default Index
