import React from "react"
import { Route } from "react-router-dom"

import Index from "@/pages/index"
import About from "@/pages/about"
import Services from "@/pages/services"
import Portfolio from "@/pages/portfolio"

import AdminNav from "@/components/Layouts/AdminNav"
import SupplierNav from "@/components/Layouts/SupplierNav"

import AdminLogin from "@/pages/admin/login"
// import AdminDashboard from "@/pages/admin/index"

// import AdminStaff from "@/pages/admin/staff/index"
// import AdminStaffCreate from "@/pages/admin/staff/create"
// import AdminStaffEdit from "@/pages/admin/staff/[id]"

import SupplierLogin from "@/pages/supplier/login"
import SupplierRegister from "@/pages/supplier/register"
import Supplier from "@/pages/supplier/index"
import SupplierEdit from "@/pages/supplier/profile/edit/[id]"

const RouteList = ({ GLOBAL_STATE }) => {
	const authRoutes = [
		{
			path: "/admin/login",
			component: <AdminLogin {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/login",
			component: <SupplierLogin {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/register",
			component: <SupplierRegister {...GLOBAL_STATE} />,
		},
	]

	const adminRoutes = []

	const supplierRoutes = [
		{
			path: "/supplier",
			component: <Supplier {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/:id/edit",
			component: <SupplierEdit {...GLOBAL_STATE} />,
		},
	]

	const routes = [
		{
			path: "/",
			component: <Index {...GLOBAL_STATE} />,
		},
		{
			path: "/about",
			component: <About {...GLOBAL_STATE} />,
		},
		{
			path: "/services",
			component: <Services {...GLOBAL_STATE} />,
		},
		{
			path: "/portfolio",
			component: <Portfolio {...GLOBAL_STATE} />,
		},
	]

	return (
		<React.Fragment>
			{/* Auth Routes */}
			{authRoutes.map((route, key) => (
				<Route
					key={key}
					path={route.path}
					exact
					render={() => route.component}
				/>
			))}
			{/* Auth Routes End */}

			{/* Landing Page routes */}
			{routes.map((route, key) => (
				<Route
					key={key}
					path={route.path}
					exact
					render={() => route.component}
				/>
			))}
			{/* Landing Page routes End */}

			{/* Admin Routes */}
			<AdminNav {...GLOBAL_STATE}>
				{adminRoutes.map((route, key) => (
					<Route
						key={key}
						path={route.path}
						exact
						render={() => route.component}
					/>
				))}
			</AdminNav>
			{/* Admin Routes End */}

			{/* Supplier Routes */}
			<SupplierNav {...GLOBAL_STATE}>
				{supplierRoutes.map((route, key) => (
					<Route
						key={key}
						path={route.path}
						exact
						render={() => route.component}
					/>
				))}
			</SupplierNav>
			{/* Supplier Routes End */}
		</React.Fragment>
	)
}

export default RouteList
