import React from 'react';
import PropTypes from "prop-types";
const LearnMoreCharacter = (props) => {
    return (
        <div className="container d-flex">
            <div className="row">
                <div className="col-6"><img src="" alt="" /></div>
                <div className="col-6">
                    <h1>tiyulo</h1>
                    <p>parrsfo</p>
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
                                <td>{props.name}</td>
                                <td>{props.birth_year}</td>
                                <td>{props.gender}</td>
                                <td>{props.height}</td>
                                <td>{props.skin_color}</td>
                                <td>{props.eye_color}</td>
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
    eye_color: PropTypes.string
}

export default LearnMoreCharacter;