import React from "react"
import { Route } from "react-router-dom"

import Index from "@/pages/index"
import About from "@/pages/about"
import Services from "@/pages/services"
import Portfolio from "@/pages/portfolio"

import AdminNav from "@/components/Layouts/AdminNav"
import SupplierNav from "@/components/Layouts/SupplierNav"

import AdminLogin from "@/pages/admin/login"
import VerifyEmail from "@/pages/admin/verify-email"
import ForgotPassword from "@/pages/admin/forgot-password"
import ResetPassword from "@/pages/admin/reset-password"

import AdminDashboard from "@/pages/admin/index"

import AdminSuppliers from "@/pages/admin/suppliers/index"
import AdminSupplierView from "@/pages/supplier/profile/[id]"
import AdminSupplierEdit from "@/pages/supplier/profile/edit/[id]"

import AdminRole from "@/pages/admin/roles"
import AdminRoleCreate from "@/pages/admin/roles/create"
import AdminRoleEdit from "@/pages/admin/roles/edit/[id]"

import AdminStaff from "@/pages/admin/staff/index"
import AdminStaffCreate from "@/pages/admin/staff/create"
import AdminStaffEdit from "@/pages/admin/staff/edit/[id]"

import AdminChat from "@/pages/admin/chats/index"
import AdminChatNew from "@/pages/admin/chats/new"
import AdminChatView from "@/pages/admin/chats/[id]"

import SupplierRegister from "@/pages/supplier/register"

import Supplier from "@/pages/supplier/profile/[id]"
import SupplierEdit from "@/pages/supplier/profile/edit/[id]"

import SupplierChat from "@/pages/admin/chats/index"
import SupplierChatNew from "@/pages/admin/chats/new"
import SupplierChatView from "@/pages/admin/chats/[id]"

const RouteList = ({ GLOBAL_STATE }) => {
	const authRoutes = [
		{
			path: "/admin/login",
			component: <AdminLogin {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/login",
			component: <AdminLogin {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/register",
			component: <SupplierRegister {...GLOBAL_STATE} />,
		},
		{
			path: "/verify-email/:id/:hash/:expires/:signature",
			component: <VerifyEmail {...GLOBAL_STATE} />,
		},
		{
			path: "/forgot-password",
			component: <ForgotPassword {...GLOBAL_STATE} />,
		},
		{
			path: "/reset-password/:token/:email",
			component: <ResetPassword {...GLOBAL_STATE} />,
		},
	]

	const adminRoutes = [
		{
			path: "/admin",
			component: <AdminDashboard {...GLOBAL_STATE} />,
		},
		{
			path: "/admin/suppliers",
			component: <AdminSuppliers {...GLOBAL_STATE} />,
		},
		{
			path: "/admin/suppliers/view/:id",
			component: <AdminSupplierView {...GLOBAL_STATE} />,
		},
		{
			path: "/admin/suppliers/edit/:id",
			component: <AdminSupplierEdit {...GLOBAL_STATE} />,
		},
		{ path: "/admin/roles", component: <AdminRole {...GLOBAL_STATE} /> },
		{
			path: "/admin/roles/create",
			component: <AdminRoleCreate {...GLOBAL_STATE} />,
		},
		{
			path: "/admin/roles/edit/:id",
			component: <AdminRoleEdit {...GLOBAL_STATE} />,
		},
		{ path: "/admin/staff", component: <AdminStaff {...GLOBAL_STATE} /> },
		{
			path: "/admin/staff/create",
			component: <AdminStaffCreate {...GLOBAL_STATE} />,
		},
		{
			path: "/admin/staff/edit/:id",
			component: <AdminStaffEdit {...GLOBAL_STATE} />,
		},
		{
			path: "/admin/chats",
			component: <AdminChat {...GLOBAL_STATE} />,
		},
		{
			path: "/admin/chats/new",
			component: <AdminChatNew {...GLOBAL_STATE} />,
		},
		{
			path: "/admin/chats/view/:id",
			component: <AdminChatView {...GLOBAL_STATE} />,
		},
	]

	const supplierRoutes = [
		{
			path: "/supplier/view/:id",
			component: <Supplier {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/edit/:id",
			component: <SupplierEdit {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/chats",
			component: <SupplierChat {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/chats/new",
			component: <SupplierChatNew {...GLOBAL_STATE} />,
		},
		{
			path: "/supplier/chats/view/:id",
			component: <SupplierChatView {...GLOBAL_STATE} />,
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
