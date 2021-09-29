import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card" style={{ width: "auto", display: "inline-block", margin: "10px" }}>
			<img className="card-img-top" src="https://via.placeholder.com/400x200" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.url}</p>
				<div className="d-flex justify-content-between">
					<a href="#" className="btn btn-primary">
						Learn More!
					</a>
					<i className="fa-light fa-heart rounded" />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	url: PropTypes.string
};

export default Card;
