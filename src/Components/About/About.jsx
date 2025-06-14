import React from 'react'
import './About.css'
import Certificate1 from '../../assets/images/Joshua Clinton - Agentic Automation Certificate of Attendance.pdf'
import Certificate2 from '../../assets/images/Python.pdf'
import Certificate3 from '../../assets/images/Joshua Clinton crefit.pdf'
import ima1 from '../../assets/images/IMG_4956.jpeg'
import ima2 from '../../assets/images/CD2A5931-420B-4574-B626-833C7F9F02AD.jpeg'
import pdf from '../../assets/images/Joshua Clinton Letter Tutoring.pdf'
import {education, experience} from "./Data_About"
import EducationCard from './educationCard'
import ExperienceCard from './experienceCard'

function About() {

    return (
        <>

            <article id="introduction">
                <div id="boxmain">
                    <h1>Introduction</h1>
                    <h1 id="story">
                        I’m a Third-year student majoring in Software Development, and my goal is to seek new challenges and
                        environments in companies from around the world.
                    </h1>
                </div>

                <div id="article_About">
                    <img className="photoicon" src={ima1} />

                    <div id="textexper">
                        <h2>Education:</h2>
                        <ul>
                            {education.map((item, index) =>
                            (<EducationCard
                                key={index}
                                name_school={item.name_school}
                                years={item.years}
                                coursework={item.coursework}
                                other={item.other}
                            />)
                            )}
                        </ul>

                    </div>
                </div>

                <div id="Experience">
                    <img className="photoicon" src={ima2} />
                    <div id="experience_article">
                        <h2>Experience:</h2>
                        {experience.map((item, index) =>
                        (<ExperienceCard
                            key={index}
                            experience_name={item.experience_name}
                            explain_experience={item.explain_experience}
                        />)
                        )}
                    </div>
                </div>

                <div id="Certificate">
                    <h1 id="Certificate_show">Certificate:</h1>

                    <div id="crefit_show">
                        <div id="Agentic_Automation_Certificate">
                            <h2 id="Agentic_Automation_text">Agentic Automation:</h2>
                            <embed src={Certificate1} />
                        </div>

                        <div id="Python_Certificate">
                            <h2 id="Python_text">Python:</h2>
                            <embed src={Certificate2} width="45%" height="90%" />
                        </div>

                        <div id="Tutoring_Certificate">
                            <h2 id="Tutoring_text">Tutoring:</h2>
                            <embed src={Certificate3} width="40%" height="70%" />
                        </div>

                        <div id="button">
                            <button id="button2" class="button"><span><a href={pdf}
                                download>Tutoring PDF</a></span></button>
                        </div>
                    </div>


                </div>


            </article>

        </>
    )
}

export default About