import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import CloseSVG from "@/svgs/CloseSVG"
import PhoneSVG from "@/svgs/PhoneSVG"
import SMSSVG from "@/svgs/SMSSVG"
import WhatsAppSVG from "@/svgs/WhatsAppSVG"
import EmailSVG from "@/svgs/EmailSVG"
import InstagramSVG from "@/svgs/InstagramSVG"
import FacebookSVG from "@/svgs/FacebookSVG"

const TopNav = () => {
	const location = useLocation()

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// Simulate an asynchronous operation (e.g., loading assets or data)
		const simulateLoading = async () => {
			try {
				// Simulating loading time with a setTimeout
				await new Promise((resolve) => setTimeout(resolve, 1000))
				setLoading(false)
			} catch (error) {
				console.error("Error loading:", error)
			}
		}

		// Invoke the simulateLoading function
		simulateLoading()
	}, []) // Empty dependency array ensures the effect runs only once on mount

	const open = () =>
		(document.getElementById("MyElement").className = "menu-open")
	const close = () =>
		document.getElementById("MyElement").classList.remove("menu-open")

	window.onscroll = () => {
		if (window.pageYOffset > 0) {
			document.getElementById("header-area").classList.add("sticky")
		} else {
			document.getElementById("header-area").classList.remove("sticky")
		}
	}

	// Show TopNav always when in Admin Login
	const sticky = location.pathname.match("/admin/login") && "sticky"

	return (
		<div id="MyElement">
			{/* Preloader Start */}
			{loading && (
				<div id="preloader" className="bg-transparent">
					<div className="preload-content">
						<div id="sonar-load"></div>
					</div>
				</div>
			)}
			{/* Preloader End */}

			{/* <!-- Grids --> */}
			<div className="grids d-flex justify-content-between">
				<div className="grid1"></div>
				<div className="grid2"></div>
				<div className="grid3"></div>
				<div className="grid4"></div>
				<div className="grid5"></div>
				<div className="grid6"></div>
				<div className="grid7"></div>
				<div className="grid8"></div>
				<div className="grid9"></div>
			</div>

			{/* <!-- ***** Header Area Start ***** --> */}
			<header
				id="header-area"
				className={`header-area ${sticky}`}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="menu-area d-flex justify-content-between">
								{/* <!-- Logo Area  --> */}
								<div className="logo-area">
									<Link to="/">KG Consultancy</Link>
								</div>

								<div className="menu-content-area d-flex align-items-center">
									{/* <!-- Header Social Area --> */}
									<div className="header-social-area d-flex align-items-center">
										<a
											href="tel:0700364446"
											data-toggle="tooltip"
											data-placement="bottom"
											title="Phone">
											<PhoneSVG />
										</a>
										<a
											href="sms:0700364446"
											data-toggle="tooltip"
											data-placement="bottom"
											title="SMS">
											<SMSSVG />
										</a>
										<a
											href="https://wa.me/+2540700364446"
											data-toggle="tooltip"
											data-placement="bottom"
											title="WhatsApp">
											<WhatsAppSVG />
										</a>
										<a
											href="mailto:alphaxardgacuuru47@gmail.com?subject = Photography&body = Enquiry"
											data-toggle="tooltip"
											data-placement="bottom"
											title="Email">
											<EmailSVG />
										</a>
										<a
											href="https://www.instagram.com/alphaxard_gacuuru"
											data-toggle="tooltip"
											data-placement="bottom"
											title="Instagram">
											<InstagramSVG />
										</a>
										<a
											href="https://www.facebook.com/alphaxard.gacuuru"
											data-toggle="tooltip"
											data-placement="bottom"
											title="Facebook">
											<FacebookSVG />
										</a>
									</div>
									{/* <!-- Header Social Area End --> */}

									{/* <!-- Menu Icon --> */}
									<span
										className="navbar-toggler-icon"
										id="menuIcon"
										onClick={open}></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* <!-- ***** Header Area End ***** --> */}

			{/* <!-- ***** Main Menu Area Start ***** --> */}
			<div className="mainMenu d-flex align-items-center justify-content-between">
				{/* <!-- Close Icon --> */}
				<div
					className="closeIcon"
					onClick={close}>
					<CloseSVG />
				</div>
				{/* <!-- Logo Area --> */}
				<div className="logo-area">
					<Link
						to="/"
						onClick={close}>
						KG Consultancy
					</Link>
				</div>
				{/* <!-- Nav --> */}
				<div
					className="sonarNav wow fadeInUp"
					data-wow-delay="1s">
					<nav>
						<ul>
							<li className="nav-item active">
								<Link
									className="nav-link"
									to="/"
									style={{ opacity: location.pathname == "/" ? 1 : 0.4 }}
									onClick={close}>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/about"
									style={{ opacity: location.pathname == "/about" ? 1 : 0.4 }}
									onClick={close}>
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/services"
									style={{
										opacity: location.pathname == "/services" ? 1 : 0.4,
									}}
									onClick={close}>
									Services
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/admin"
									style={{
										opacity: location.pathname == "/admin/login" ? 1 : 0.4,
									}}
									onClick={close}>
									Admin Portal
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/supplier"
									style={{
										opacity: location.pathname == "/supplier/login" ? 1 : 0.4,
									}}
									onClick={close}>
									Supplier Portal
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				{/* <!-- Copwrite Text --> */}
				<div className="copywrite-text">
					<p>
						{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
						Copyright &copy;
						<script>document.write(new Date().getFullYear());</script> All
						rights reserved | This template is made with{" "}
						<i
							className="fa fa-heart-o"
							aria-hidden="true"></i>{" "}
						by{" "}
						<a
							href="https://colorlib.com"
							target="_blank">
							Colorlib
						</a>
						{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
					</p>
				</div>
			</div>
			{/* <!-- ***** Main Menu Area End ***** --> */}
		</div>
	)
}

export default TopNav
