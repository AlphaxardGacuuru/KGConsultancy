import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Img from "@/components/Core/Img"

import ChatSVG from "@/svgs/ChatSVG"

const Chat = (props) => {
	const [admin, setAdmin] = useState({})
	const [chatThreads, setChatThreads] = useState([])

	useEffect(() => {
		// Set page
		props.setPage({ name: "Chats", path: ["chats"] })
		props.get("users/2", setAdmin)
		props.get("chats", setChatThreads)
	}, [])

	return (
		<div className="row">
			<div className="col-sm-2"></div>
			<div className="col-sm-8">
				{/* Chat button */}
				<Link
					to="/chat/new"
					id="chatFloatBtn">
					<ChatSVG />
				</Link>

				{/* Default Thread */}
				{chatThreads.length == 0 && (
					<div className="d-flex">
						<div className="p-2">
							<Link to="/chat/show/2">
								<Img
									src={admin.avatar}
									className="rounded-circle"
									width="50px"
									height="50px"
								/>
							</Link>
						</div>
						<div className="p-2 flex-grow-1">
							<Link to="/chat/show/2">
								<h6
									className="m-0"
									style={{
										width: "100%",
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "clip",
									}}>
									<b>Wanjiku</b>
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
						className="d-flex">
						<div className="pt-2">
							<Link to={`/chat/show/${chatThread.id}`}>
								<Img
									src={chatThread.avatar}
									className="rounded-circle"
									width="50px"
									height="50px"
								/>
							</Link>
						</div>
						<div
							className="p-2"
							style={{
								maxWidth: "75%",
								wordWrap: "break-word",
							}}>
							<Link to={`/chat/show/${chatThread.id}`}>
								<h6
									className="m-0"
									style={{
										width: "100%",
										whiteSpace: "nowrap",
										overflow: "hidden",
										textOverflow: "clip",
									}}>
									<b>{chatThread.name}</b>
									<small>{chatThread.id}</small>
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
