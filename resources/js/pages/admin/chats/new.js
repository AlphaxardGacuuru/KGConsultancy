import React, { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min"

import Img from "@/components/Core/Img"
import BackSVG from "@/svgs/BackSVG"

export default function NewChat(props) {
	const location = useLocation()

	const [search, setSearch] = useState("")
	const [suppliers, setSuppliers] = useState([])

	const searchInput = useRef(null)

	setTimeout(() => searchInput.current.focus(), 100)

	useEffect(() => {
		// Set page
		props.setPage({ name: "New Chat", path: ["chats"] })
		props.get("suppliers", setSuppliers)
	}, [])

	return (
		<div className="row">
			<div className="col-sm-2"></div>
			<div className="col-sm-8">
				<div className="my-card shadow mb-4 p-4">
					<div className="d-flex flex-wrap">
						{/* Name */}
						<div className="flex-grow-1 me-2 mb-2">
							<input
								ref={searchInput}
								type="text"
								name="name"
								placeholder="Search by Name or Email"
								className="form-control"
								onChange={(e) => {
									var regex = new RegExp(e.target.value, "gi")
									setSearch(regex)
								}}
							/>
						</div>
						{/* Name End */}
					</div>
				</div>

				{/* <!-- ****** Artists Area Start ****** --> */}
				<div className="hidden-scroll">
					{suppliers
						.filter((supplier) => {
							return (
								supplier.name.toLowerCase().match(search) ||
								supplier.email.match(search)
							)
						})
						.map((supplier, key) => (
							<div
								key={key}
								className="my-card d-flex m-2 p-2">
								<div className="p-1">
									<Link
										to={
											location.pathname.match("admin")
												? `/admin/chats/view/${supplier.id}`
												: `/supplier/chats/view/${supplier.id}`
										}>
										<Img
											src={supplier.avatar}
											className="rounded-circle"
											width="50px"
											height="50px"
										/>
									</Link>
								</div>
								<div
									className="p-2 flex-grow-1"
									style={{ width: "65%" }}>
									<Link
										to={
											location.pathname.match("admin")
												? `/admin/chats/view/${supplier.id}`
												: `/supplier/chats/view/${supplier.id}`
										}>
										<h6
											className="m-0"
											style={{
												width: "100%",
												whiteSpace: "nowrap",
												overflow: "hidden",
												textOverflow: "clip",
											}}>
											<b>{supplier.name}</b>
											<p className="mb-0">{supplier.email}</p>
										</h6>
									</Link>
								</div>
							</div>
						))}
				</div>
				{/* <!-- ****** Artists Area End ****** - */}
			</div>

			<div className="col-sm-2"></div>
		</div>
	)
}
