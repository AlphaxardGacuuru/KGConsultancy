import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min"
import Img from "@/components/Core/Img"

import NewChatSVG from "@/svgs/NewChatSVG"

const Chat = (props) => {
	const location = useLocation()

	const [admin, setAdmin] = useState({})
	const [chatThreads, setChatThreads] = useState([])

	useEffect(() => {
		// Set page
		props.setPage({ name: "Chats", path: ["chats"] })
		props.get("staff/1", setAdmin)
		props.get("chats", setChatThreads)
	}, [])

	return (
		<div className="row">
			<div className="col-sm-2"></div>
			<div className="col-sm-8">
				{/* Chat button */}
				<Link
					to="chats/new"
					id="chatFloatBtn"
					className={
						location.pathname.match("admin") ? "text-primary" : "d-none"
					}>
					<NewChatSVG />
				</Link>

				{/* Default Thread */}
				{chatThreads.length == 0 && (
					<div className="my-card d-flex">
						<div className="p-2">
							<Link to={`chats/view/${admin.id}`}>
								<Img
									src={admin.avatar}
									className="rounded-circle"
									width="50px"
									height="50px"
								/>
							</Link>
						</div>
						<div className="p-2 flex-grow-1">
							<Link to={`chats/view/${admin.id}`}>
								<h6
									className="m-0"
									style={{
										width: "100%",
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "clip",
									}}>
									<b>{admin.name}</b>
								</h6>
								<p className="mb-0">Need help? Start a conversation.</p>
							</Link>
						</div>
					</div>
				)}
				{/* Start Thread End */}

				{/* Threads Start */}
				{chatThreads.map((chatThread, key) => (
					<div
						key={key}
						className="my-card d-flex m-2 p-2">
						<div className="pt-2">
							<Link to={`chats/view/${chatThread.to}`}>
								<Img
									// src={chatThread.avatar}
									className="rounded-circle"
									width="50px"
									height="50px"
								/>
							</Link>
						</div>
						<div
							className="p-2"
							style={{
								minWidth: "75%",
								maxWidth: "75%",
								wordWrap: "break-word",
							}}>
							<Link to={`chats/view/${chatThread.to}`}>
								<h6
									className="m-0"
									style={{
										width: "100%",
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "clip",
									}}>
									<b>{chatThread.name}</b>
									<small>{chatThread.email}</small>
								</h6>
								<p
									className="m-0"
									style={{
										width: "100%",
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "clip",
									}}>
									{chatThread.text}
								</p>
							</Link>
						</div>
						<div className="py-2 flex-grow-1">
							<small>
								<i
									style={{
										whiteSpace: "nowrap",
										fontSize: "0.8em",
									}}
									className="float-end mr-1 text-secondary">
									{chatThread.createdAt}
								</i>
							</small>
						</div>
					</div>
				))}
				{/* Threads End */}
			</div>
			<div className="col-sm-2"></div>
		</div>
	)
}

export default Chat
