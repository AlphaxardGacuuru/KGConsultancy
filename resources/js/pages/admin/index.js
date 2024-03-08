import React, { useEffect, useState } from "react"

import MyLink from "@/components/Core/MyLink"
import Btn from "@/components/Core/Btn"
import Img from "@/components/Core/Img"

import Bar from "@/components/Charts/Bar"
import Line from "@/components/Charts/Line"
import Doughnut from "@/components/Charts/Doughnut"

import PersonSVG from "@/svgs/PersonSVG"
import PeopleSVG from "@/svgs/PeopleSVG"
import BidSVG from "@/svgs/BidSVG"
import RFQSVG from "@/svgs/TenderSVG"
import TenderSVG from "@/svgs/TenderSVG"
import ArrowUpSVG from "@/svgs/ArrowUpSVG"
import ArrowDownSVG from "@/svgs/ArrowDownSVG"

const index = (props) => {
	const [dashboard, setDashboard] = useState({})
	const [suppliers, setSuppliers] = useState([])
	const [bids, setBids] = useState([])
	const [tenders, setTenders] = useState([])
	const [rfqs, setRfqs] = useState([])

	useEffect(() => {
		// Set page
		props.setPage({ name: "Dashboard", path: ["/"] })

		Axios.get("/api/admin").then((res) => setDashboard(res.data))
		props.get("suppliers", setSuppliers)
		// props.get("bids", setBids)
		// props.get("rfq", setRfqs)
		// props.get("tenders", setTenders)
	}, [])

	var barGraphDatasets1 = [
		{
			label: "Suppliers this month",
			data: dashboard.suppliers?.lastMonth?.data,
			backgroundColor: "rgba(54, 162, 235, 1)",
			borderColor: "rgb(255, 255, 255)",
			borderWidth: 1,
			borderRadius: "50",
			barThickness: "20",
		},
		{
			label: "Bids this month",
			data: dashboard.bids?.lastMonth?.data,
			backgroundColor: "rgba(255, 99, 132, 1)",
			borderColor: "rgb(255, 255, 255)",
			borderWidth: 1,
			borderRadius: "50",
			barThickness: "20",
		},
		{
			label: "RFQs this month",
			data: dashboard.rfqs?.lastMonth?.data,
			backgroundColor: "rgba(255, 99, 132, 1)",
			borderColor: "rgb(255, 255, 255)",
			borderWidth: 1,
			borderRadius: "50",
			barThickness: "20",
		},
		{
			label: "Tenders this month",
			data: dashboard.tenders?.lastMonth?.data,
			backgroundColor: "rgba(255, 205, 86, 1)",
			borderColor: "rgb(255, 255, 255)",
			borderWidth: 1,
			borderRadius: "50",
			barThickness: "20",
		},
	]

	var lineGraphDatasets1 = [
		{
			label: "Last Week",
			data: dashboard.suppliers?.lastWeek,
			backgroundColor: "rgba(54, 162, 235, 1)",
			borderColor: "rgb(54, 162, 235)",
			// borderWidth: 1,
		},
	]

	var lineGraphDatasets2 = [
		{
			label: "Last Week",
			data: dashboard.bids?.lastWeek,
			backgroundColor: "rgba(255, 99, 132, 1)",
			borderColor: "rgb(255, 99, 132)",
			// borderWidth: 1,
		},
	]

	var lineGraphDatasets3 = [
		{
			label: "Last Week",
			data: dashboard.tenders?.lastWeek,
			backgroundColor: "rgba(255, 159, 64, 1)",
			borderColor: "rgb(255, 159, 64)",
			// borderWidth: 1,
		},
	]

	var doughnutGraphDatasets1 = [
		{
			label: "Last Week",
			data: [
				dashboard.suppliers?.byCategory[0]?.count,
				dashboard.suppliers?.byCategory[1]?.count,
				dashboard.suppliers?.byCategory[2]?.count,
				dashboard.suppliers?.byCategory[3]?.count,
			],
			backgroundColor: [
				"rgba(54, 162, 235, 1)",
				"rgba(255, 99, 132, 1)",
				"rgba(255, 205, 86, 1)",
				"rgba(255, 105, 86, 1)",
			],
			borderColor: [
				"rgba(54, 162, 235, 1)",
				"rgba(255, 99, 132, 1)",
				"rgba(255, 205, 86, 1)",
				"rgba(255, 105, 86, 1)",
			],
			// borderWidth: 1,
		},
	]

	return (
		<>
			<div className="row">
				<div className="col-sm-12">
					<div className="d-flex flex-wrap justify-content-start">
						{/* Customers */}
						<div className="border-top-0 border-end-0 border-bottom-0 border-5 border-primary rounded m-1 me-4 p-2 my-card">
							<div className="d-flex justify-content-between align-items-center">
								<div className="px-4">
									<h4>Suppliers</h4>
									<h6>{dashboard.suppliers?.total}</h6>
								</div>
								<div className="px-4 fs-2 bg-primary-subtle text-primary rounded">
									<PersonSVG />
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-center">
								<div className="">
									<h6>
										{dashboard.suppliers?.growth > 0 && (
											<span className="text-success">
												<ArrowUpSVG />
												{dashboard.suppliers?.growth}
											</span>
										)}
										{dashboard.suppliers?.growth == 0 && (
											<span className="text-secondary">
												{dashboard.suppliers?.growth}
											</span>
										)}
										{dashboard.suppliers?.growth < 0 && (
											<span className="text-danger">
												<ArrowDownSVG />
												{dashboard.suppliers?.growth}
											</span>
										)}
									</h6>
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-center">
								{dashboard.suppliers && (
									<Line
										labels={[1, 2, 3, 4, 5, 6, 7]}
										datasets={lineGraphDatasets1}
									/>
								)}
							</div>
						</div>
						{/* Customers End */}
						{/* Bids */}
						<div className="border-top-0 border-end-0 border-bottom-0 border-5 border-primary rounded m-1 me-4 p-2 my-card">
							<div className="d-flex justify-content-between align-items-center">
								<div className="px-4">
									<h4>Bids</h4>
									<h6>{dashboard.bids?.total}</h6>
								</div>
								<div className="px-4 fs-2 bg-primary-subtle text-primary rounded">
									<BidSVG />
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-center">
								<div className="">
									<h6>
										{dashboard.bids?.growth > 0 && (
											<span className="text-success">
												<ArrowUpSVG />
												{dashboard.bids?.growth}
											</span>
										)}
										{dashboard.bids?.growth == 0 && (
											<span className="text-secondary">
												{dashboard.bids?.growth}
											</span>
										)}
										{dashboard.bids?.growth < 0 && (
											<span className="text-danger">
												<ArrowDownSVG />
												{dashboard.bids?.growth}
											</span>
										)}
									</h6>
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-center">
								{dashboard.bids && (
									<Line
										labels={[1, 2, 3, 4, 5, 6, 7]}
										datasets={lineGraphDatasets2}
									/>
								)}
							</div>
						</div>
						{/* Bids End */}
						{/* RFQs */}
						<div className="border-top-0 border-end-0 border-bottom-0 border-5 border-primary rounded m-1 me-4 p-2 my-card">
							<div className="d-flex justify-content-between align-items-center">
								<div className="px-4">
									<h4>RFQs</h4>
									<h6>{dashboard.rfqs?.total}</h6>
								</div>
								<div className="px-4 fs-2 bg-primary-subtle text-primary rounded">
									<RFQSVG />
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-center">
								<div className="">
									<h6>
										{dashboard.rfqs?.growth > 0 && (
											<span className="text-success">
												<ArrowUpSVG />
												{dashboard.rfqs?.growth}
											</span>
										)}
										{dashboard.rfqs?.growth == 0 && (
											<span className="text-secondary">
												{dashboard.rfqs?.growth}
											</span>
										)}
										{dashboard.rfqs?.growth < 0 && (
											<span className="text-danger">
												<ArrowDownSVG />
												{dashboard.rfqs?.growth}
											</span>
										)}
									</h6>
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-center">
								{dashboard.rfqs && (
									<Line
										labels={[1, 2, 3, 4, 5, 6, 7]}
										datasets={lineGraphDatasets2}
									/>
								)}
							</div>
						</div>
						{/* RFQs End */}
						{/* Tenders */}
						<div className="border-top-0 border-end-0 border-bottom-0 border-5 border-primary rounded m-1 me-4 p-2 my-card">
							<div className="d-flex justify-content-between align-items-center">
								<div className="px-4">
									<h4>Tenders</h4>
									<h6>{dashboard.tenders?.total}</h6>
								</div>
								<div className="px-4 fs-2 bg-primary-subtle text-primary rounded">
									<TenderSVG />
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-center">
								<div className="">
									<h6>
										{dashboard.tenders?.growth > 0 && (
											<span className="text-success">
												<ArrowUpSVG />
												{dashboard.tenders?.growth}
											</span>
										)}
										{dashboard.tenders?.growth == 0 && (
											<span className="text-secondary">
												{dashboard.tenders?.growth}
											</span>
										)}
										{dashboard.tenders?.growth < 0 && (
											<span className="text-danger">
												<ArrowDownSVG />
												{dashboard.suppliers?.growth}
											</span>
										)}
									</h6>
								</div>
							</div>
							<div className="d-flex justify-content-end align-items-center">
								{dashboard.tenders && (
									<Line
										labels={[1, 2, 3, 4, 5, 6, 7]}
										datasets={lineGraphDatasets3}
									/>
								)}
							</div>
						</div>
						{/* Tenders End */}
					</div>
				</div>
			</div>

			<div className="row">
				<h4 className="my-3">Suppliers This Month</h4>
				<div className="col-sm-8">
					{/* Suppliers Bar Graph*/}
					<div className="my-card rounded hidden-scroll">
						{dashboard.suppliers && (
							<Bar
								labels={dashboard.suppliers?.lastMonth.labels}
								datasets={barGraphDatasets1}
							/>
						)}
					</div>
					{/* Suppliers Bar Graph End */}
				</div>
				<div className="col-sm-4">
					<div className="my-card p-4">
						<center>
							<h5>{dashboard.suppliers?.total}</h5>
							<h5>Suppliers By Category</h5>
							{dashboard.suppliers && (
								<Doughnut
									labels={["Services", "Goods", "Works", "Consultancy"]}
									datasets={doughnutGraphDatasets1}
								/>
							)}
						</center>
					</div>
				</div>

				{/* Recent Suppliers */}
				<div className="row">
					<div className="col-sm-12">
						<h4 className="my-3">Recent Suppliers</h4>

						{/* Recent Suppliers Table */}
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
									<tr>
										<th>Name</th>
										<th>Phone</th>
										<th>Email</th>
										<th>Supplier Name</th>
										<th>SupplierType</th>
										<th>Category</th>
										<th>Staff</th>
										<th>Date Joined</th>
									</tr>
								</thead>
								<tbody>
									{dashboard.suppliers?.list.map((supplier, key) => (
										<tr key={key}>
											<td>{supplier.name}</td>
											<td>{supplier.phone}</td>
											<td>{supplier.email}</td>
											<td>{supplier.supplierName}</td>
											<td>{supplier.supplierType}</td>
											<td className="text-capitalize">{supplier.category}</td>
											<td>{supplier.staff}</td>
											<td>{supplier.createdAt}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className="bg-light p-2">
							<MyLink
								linkTo="/admin/suppliers"
								text="view more"
							/>
						</div>
						{/* Recent Suppliers Table End */}
					</div>
				</div>
			</div>
			{/* Recent Suppliers End */}

			{/* Suppliers By Countries Registered */}
			<div className="row">
				<div className="col-sm-6">
					<h4 className="my-3">Suppliers by Country Registered</h4>
					<div className="my-card border p-4">
						{dashboard.suppliers?.byCountryRegistered.map((item, key) => (
							<div
								key={key}
								className="d-flex justify-content-between w-100 mb-1">
								<div className="text-nowrap">{item.country}</div>
								<div className="ms-2 rounded-pill w-100 bg-light">
									<div
										className="bg-primary rounded-pill text-white text-center fw-light"
										style={{ width: item.count }}>
										{item.count}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Suppliers By Countries Registered End */}

				{/* Suppliers By Countries In Operations */}
				<div className="col-sm-6">
					<h4 className="my-3">Suppliers by Country in Operation</h4>
					<div className="my-card border p-4">
						{dashboard.suppliers?.byCountryInOperation.map((item, key) => (
							<div
								key={key}
								className="d-flex justify-content-between w-100 mb-1">
								<div className="text-nowrap">{item.country}</div>
								<div className="ms-2 rounded-pill w-100 bg-light">
									<div
										className="bg-primary rounded-pill text-white text-center fw-light"
										style={{ width: item.count }}>
										{item.count}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Suppliers By Countries In Operations End */}
			</div>
		</>
	)
}

export default index
