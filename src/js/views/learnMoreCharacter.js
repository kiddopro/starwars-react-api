import React from 'react';
import PropTypes from "prop-types";
const LearnMoreCharacter = (props) => {
    return (
        <div className="container d-flex">
            <div className="row">
                <div className="col-6"><img src="" alt="" /></div>
                <div className="col-6">
                    <h1>{props.properties.name}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birth Year</th>
                                <th>Gender</th>
                                <th>Height</th>
                                <th>Skin Color</th>
                                <th>Eye Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.properties.name}</td>
                                <td>{props.properties.birth_year}</td>
                                <td>{props.properties.gender}</td>
                                <td>{props.properties.height}</td>
                                <td>{props.properties.skin_color}</td>
                                <td>{props.properties.eye_color}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

LearnMoreCharacter.propTypes = {
    name: PropTypes.string,
    birth_year: PropTypes.string.apply,
    gender: PropTypes.string,
    height: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string,
    description: PropTypes.string
}

export default LearnMoreCharacter;