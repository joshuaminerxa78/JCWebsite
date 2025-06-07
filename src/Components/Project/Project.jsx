import React from 'react'
import './Project.css'
import pdf2 from '../../assets/images/certificate-hack-the-waste-joshua-clinto_a92zJmU.pdf'

function Project() {
    const project =[
        {
            project_names: "HackWaste Recycling App",
            project_explain: "Developed a smart recycling app using Python and React to help users sort and manage waste efficiently. My team placed second in an international hackathon."
        },
        {
            project_names: "BusIT Week – Food Monitoring Website",
            project_explain: "Created a responsive web interface to monitor temperature, water levels, and humidity to help preserve food in rural areas. The project used HTML, CSS, and real-time data display."
        },
                {
            project_names: "Hand Gesture Recognition",
            project_explain: "Worked on a Computer Vision project to detect hand gestures using Python and OpenCV, aimed at improving accessibility for the deaf and hard-of-hearing community."
        }
    ]
    return (
        <>
            <section id="projects" class="section">
                <h2>Projects</h2>
                <embed class="pdfimag" src={pdf2} width="15%" height="20%" />
                <div class="pdfcref">
                        {project.map(item => <><div class="project-card"> <h3 key={item}>{item.project_names}</h3> <p key={item}>{item.project_explain}</p></div></>)}
                    
                </div>
            </section>
        </>
    )
}

export default Project