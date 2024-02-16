import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"

const Index = () => {
	useEffect(() => {
		// Slide on page load
		// Get the animated div
		const animatedDiv = document.getElementById("animatedDiv")

		// Add the 'active' class after a short delay (adjust as needed)
		setTimeout(function () {
			animatedDiv.classList.add("active")
		}, 500) // 500 milliseconds delay
	}, [])

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
			<div
				id="animatedDiv"
				className="sonar-call-to-action-area section-padding-0-100 slide-in">
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
		</div>
	)
}

export default Index
