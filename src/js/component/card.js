import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.url}</p>
                <a href="#" className="btn btn-primary">More information</a>
            </div>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string
}

export default Card;