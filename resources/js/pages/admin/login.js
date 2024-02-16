import React from "react"

const login = (props) => {
	return (
		<div className="container mt-5 pt-5">
			<div className="row justify-content-center mt-5">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header">Login</div>

						<div className="card-body">
							<form method="POST">
								<div className="row mb-3">
									<label
										htmlFor="email"
										className="col-md-4 col-form-label text-md-end">
										Email Address
									</label>

									<div className="col-md-6">
										<input
											id="email"
											type="email"
											className="form-control @error('email') is-invalid @enderror"
											name="email"
											value=""
											required
											autoComplete="email"
											autoFocus
										/>

										<span
											className="invalid-feedback"
											role="alert">
											<strong>$message</strong>
										</span>
									</div>
								</div>

								<div className="row mb-3">
									<label
										htmlFor="password"
										className="col-md-4 col-form-label text-md-end">
										Password
									</label>

									<div className="col-md-6">
										<input
											id="password"
											type="password"
											className="form-control @error('password') is-invalid @enderror"
											name="password"
											required
											autoComplete="current-password"
										/>

										<span
											className="invalid-feedback"
											role="alert">
											<strong>$message</strong>
										</span>
									</div>
								</div>

								<div className="row mb-3">
									<div className="col-md-6 offset-md-4">
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
												name="remember"
												id="remember"
											/>

											<label
												className="form-check-label"
												htmlFor="remember">
												Remember Me
											</label>
										</div>
									</div>
								</div>

								<div className="row mb-0">
									<div className="col-md-8 offset-md-4">
										<button
											type="submit"
											className="btn btn-primary">
											Login
										</button>

										<a
											className="btn btn-link"
											href="{{ route('password.request') }}">
											Forgot Your Password?
										</a>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default login