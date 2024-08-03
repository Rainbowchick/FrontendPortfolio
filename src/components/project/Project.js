import React from 'react';
import image1 from "../../img/projects/01.jpg";
import './styles.css'

function Project(props) {
    return (
        <li className="project">
            <a href="./project-page.html">
                <img src={image1} alt="Project img" className="project__img"/>
                <h3 className="project__title">Gaming streaming portal</h3>
            </a>
        </li>
    );
}

export default Project;