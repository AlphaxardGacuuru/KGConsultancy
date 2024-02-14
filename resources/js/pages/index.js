import React from "react"
import { Link } from "react-router-dom"
import Carousel from "react-bootstrap/Carousel"

const Index = () => {
	// Images array
	const images = [
		"img/portfolio-img/Wedding-05.jpg",
		"img/portfolio-img/Wedding-40.jpg",
		"img/portfolio-img/Wedding-31.jpg",
		"img/portfolio-img/Wedding-13.jpg",
	]

	return (
		<div>
			{/* <!-- ***** Hero Area Start ***** --> */}
			<Carousel controls={false}>
				<Carousel.Item interval={3000}>
					<img
						className="d-block w-100"
						src="img/portfolio-img/Wedding-05.jpg"
						alt="First slide"
						loading="lazy"
					/>
					<Carousel.Caption>
						<h3 style={{ color: "white" }}>Gachie</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className="d-block w-100"
						src="img/portfolio-img/Wedding-31.jpg"
						alt="Second slide"
						loading="lazy"
					/>

					<Carousel.Caption>
						<h3 style={{ color: "white" }}>Aboretum</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className="d-block w-100"
						src="img/portfolio-img/Wedding-22.jpg"
						alt="Third slide"
						loading="lazy"
					/>

					<Carousel.Caption>
						<h3 style={{ color: "white" }}>Kasarani</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			{/* <!-- ***** Hero Area End ***** --> */}

			<br />
			<br />

			{/* <!-- ***** Call to Action Area Start ***** --> */}
			<div className="sonar-call-to-action-area section-padding-0-100">
				<div className="backEnd-content">
					<h2>Real</h2>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="call-to-action-content wow fadeInUp"
								data-wow-delay="0.5s">
								<h2>
									"In photography there is a reality so subtle that it becomes
									more <b>real</b> than reality."
								</h2>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- ***** Call to Action Area End ***** --> */}

			<div
				className="sonar-testimonials-area bg-img"
				style={{ backgroundImage: "url(img/bg-img/tes.jpg)" }}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12 col-md-10 col-lg-7">
							<div className="testimonial-content bg-white">
								<div className="section-heading text-left">
									<div className="line"></div>
									<h2>What I do</h2>
								</div>

								<div className="single-tes-slide">
									<h5>Wedding Photography</h5>
									<h6>
										I take your day and immortalize it in breath taking
										photography so you can remember it for all time, share it
										with your friends, family, children and generations to come.
									</h6>
								</div>
								<br />
								<br />

								<div className="single-tes-slide">
									<h5>Wedding Videography</h5>
									<h6>
										I take your eventful day and turn it into a movie. With my
										skilled team of experienced videographers, we capture every
										emotion of the day frame by frame.
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
					style={{ backgroundColor: "#000" }}>
					<center>
						<h1 style={{ color: "white" }}>About Me</h1>
					</center>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-6 p-0">
					<img
						src="img/bg-img/Me-3.jpg"
						loading="lazy"
						alt="creator"
					/>
				</div>
				<div
					className="col-sm-6"
					style={{ backgroundColor: "#232323" }}>
					<div className="mt-5 mb-5 hidden"></div>
					<center>
						<br />
						<br />
						<div className="d-flex justify-content-center mb-3">
							<div className="p-2 ml-5 mr-5 hidden">Flex item 1</div>
							<div className="px-3">
								<div
									className="m-3"
									style={{ backgroundColor: "white", height: "1px" }}></div>
								<h2 style={{ color: "white" }}>Hi, I'm Al</h2>
								<p style={{ color: "white" }}>
									I'm an experienced photographer and videographer and I know
									that wedding ceremonies ought to be memorable, thus HAVI
									Lenses offers customized wedding coverage to immortalize your
									day.
								</p>
							</div>
							<div className="p-2 ml-5 mr-5 hidden">Flex item 3</div>
						</div>
					</center>
				</div>
			</div>
			<div className="row">
				<div
					className="col-sm-12 p-5"
					style={{ backgroundColor: "#232323" }}>
					<center>
						<Link
							to="/about"
							className="btn sonar-btn white-btn">
							See More
						</Link>
					</center>
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
								style={{ backgroundColor: "#232323", color: "white" }}
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

			{/* Gallery Area Start */}
			<div className="row">
				<div className="col-sm-12 mt-5 mb-3">
					<center>
						<h1>Portfolio</h1>
					</center>
				</div>
			</div>
			<div>
				{images.map((image, key) => (
					<span
						key={key}
						className="thumbnail w-50"
						style={{
							borderRadius: "0px",
							display: "inline-block",
							textAlign: "center",
							verticalAlign: "top",
							padding: "2px",
							transition: "display 2s ease",
						}}>
						<a href={image}>
							<img src={image} />
						</a>
					</span>
				))}
			</div>
			<div className="row">
				<div className="col-sm-12 p-5">
					<center>
						<Link
							to="/portfolio"
							className="btn sonar-btn">
							see more
						</Link>
					</center>
				</div>
			</div>
			{/* Gallery Area End */}

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
