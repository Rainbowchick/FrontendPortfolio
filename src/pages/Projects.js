import React from 'react';
import image1 from '../img/projects/01.jpg'
import image2 from '../img/projects/02.jpg'
import image3 from '../img/projects/03.jpg'
import image4 from '../img/projects/04.jpg'
import image5 from '../img/projects/05.jpg'
import image6 from '../img/projects/06.jpg'
import Project from "../components/project/Project";

function Projects(props) {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <Project />



                </ul>
            </div>
        </main>
    );
}

export default Projects;