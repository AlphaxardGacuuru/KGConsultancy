import React from "react"
import { Link, useLocation, useHistory, withRouter } from "react-router-dom"

const Footer = () => {
	const location = useLocation()

	// Show Admin Nav based on Location
	const showFooter =
		!location.pathname.match("/admin") && !location.pathname.match("/supplier")
			? "d-block"
			: "d-none"

	return (
		<div className={`mt-5 ${showFooter}`}>
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
								<h2>
									We connect organizations with suppliers that meet procurement
									requirements, compliant to organization standards and provide
									Value for Money.
								</h2>
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

			{/* <!-- ***** Footer Area Start ***** --> */}
			<footer className="footer-area">
				{/* <!-- back end content --> */}
				<div className="backEnd-content">
					<img
						className="dots"
						src="storage/img/core-img/dots.png"
						alt=""
					/>
					<h2>Dream</h2>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* <!-- Copywrite Text --> */}
							<div className="copywrite-text">
								<p>
									{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
									Copyright &copy;
									<script>document.write(new Date().getFullYear());</script>
									All rights reserved | This template is made with
									<i
										className="fa fa-heart-o mx-1"
										aria-hidden="true"></i>
									by
									<a
										href="https://colorlib.com"
										target="_blank"
										rel="noreferrer"
										className="mx-1">
										Colorlib
									</a>
									{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* <!-- ***** Footer Area End ***** --> */}
		</div>
	)
}

export default Footer
