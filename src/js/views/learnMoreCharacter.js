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
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

LearnMoreCharacter.propTypes = {
    
}

export default LearnMoreCharacter;