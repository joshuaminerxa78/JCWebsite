import React from 'react'
import './Project.css'

function Project() {
    return (
        <>
            <section id="projects" class="section">
                <h2>Projects</h2>

                <div class="pdfcref">
                    <div class="project-card">
                        <h3>HackWaste Recycling App</h3>
                        <p>Developed a smart recycling app using Python and React to help users sort and manage waste efficiently.
                            My team placed second in an international hackathon.</p>
                    </div>
                    <embed class="pdfimag" src="src/assets/images/certificate-hack-the-waste-joshua-clinto_a92zJmU.pdf" width="15%" height="90%" />
                </div>

                <div class="project-card2">
                    <h3>BusIT Week – Food Monitoring Website</h3>
                    <p>Created a responsive web interface to monitor temperature, water levels, and humidity to help preserve
                        food in rural areas. The project used HTML, CSS, and real-time data display.</p>
                </div>

                <div class="project-card2">
                    <h3>Hand Gesture Recognition</h3>
                    <p>Worked on a Computer Vision project to detect hand gestures using Python and OpenCV, aimed at improving
                        accessibility for the deaf and hard-of-hearing community.</p>
                </div>
            </section>
        </>
    )
}

export default Project