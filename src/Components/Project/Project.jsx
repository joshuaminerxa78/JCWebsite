import React from 'react'
import './Project.css'
import pdf2 from '../../assets/images/certificate-hack-the-waste-joshua-clinto_a92zJmU.pdf'
import {project} from './data_project.js'
import ProjectCard from './projectCard'

function Project() {

    return (
        <>
            <section id="projects" class="section">
                <h2>Projects</h2>
                <embed className="pdfimag" src={pdf2} width="15%" height="20%" />
                <div className="pdfcref">
                    {project.map((item,index) => 
                    (<ProjectCard
                        key={index}
                        project_names={item.project_names}
                        project_explain={item.project_explain}
                    />)
                    )}
                </div>
            </section>
        </>
    )
}

export default Project