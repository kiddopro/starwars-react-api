import React, { useState } from "react";

const Favourites = () => {
	const [fav, setFav] = useState([]);

	return (
		<div className="dropdown">
			<button
				className="btn btn-primary dropdown-toggle "
				type="button"
				id="dropdownMenuButton1"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				Favourites <span className="border-0 rounded bg-secondary px-1 fw-bold">{fav.length}</span>
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				<li>
					<a className="dropdown-item" href="#">
						{fav}
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Favourites;
