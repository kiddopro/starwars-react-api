import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				{/* <Link to="/"> */}
				<span className="navbar-brand mb-0 h1">
					<img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" style={{ width: "70px" }} />
				</span>
				{/* </Link> */}
				{/* <div> */}
				{/* <Link to="/demo"> */}
				<div className="dropdown show">
					<a
						className="btn btn-secondary dropdown-toggle"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown link
					</a>

					<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a className="dropdown-item" href="#">
							Action
						</a>
						<a className="dropdown-item" href="#">
							Another action
						</a>
						<a className="dropdown-item" href="#">
							Something else here
						</a>
					</div>
				</div>
				{/* </Link> */}
				{/* </div> */}
			</div>
		</nav>
	);
};
