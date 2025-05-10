import React from 'react'
import './About.css'

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
            <img class="photoicon" src="src/assets/images/IMG_4956.jpeg"/>

            <div id="textexper">
                <h2>Education:</h2>
                <ul>
                    <li>Diploma of Information Technology</li>
                    <ul>
                        <li> Start at 2023 to 2026 </li>
                        <li> Marjor is Software Development </li>
                        <li> Relevant coursework: Software Development and total 13/24 Distinctions for modules or
                            subjects</li>
                        <li>Programming, Database, Website and Software Testing and Software Analysis & Design,
                            mathematics, and mathematics statistics.</li>
                    </ul>
                </ul>

                <ul>
                    <li>Fulton School for the Deaf</li>
                    <ul>
                        <li>2019-2022: Top Achievement</li>
                        <li>2022: Grade 12 RCL representative and Award dux, Top Achievement, 6/7 Subject or modules
                            over 70% in SBA and presession. Hution Bursary award R20 000.</li>
                    </ul>
                </ul>

            </div>
        </div>

        <div id="Experience">
            <img class="photoicon" src="src/assets/images/CD2A5931-420B-4574-B626-833C7F9F02AD.jpeg"/>
            <div id="experience_article">
                <h2>Experience:</h2>
                <ul>
                    <li>Belgium Campus Tutoring Peering program</li>
                    <ul>
                        <li>I have taught both hearing and deaf students, and I help with any topic-related problems
                            from modules in Programming, Database, Website and Software Testing and Software Analysis &
                            Design, mathematics, and mathematics statistics. I am skilled in using English and sign
                            language to teach studentsand communication and time management</li>
                    </ul>
                </ul>
                <ul>
                    <li>Hack the Waste as Hackathon</li>
                    <ul>
                        <li>International Hackathon 2023 in online: I participated in an online international event on
                            waste management called Hackwaste.</li>
                    </ul>
                </ul>

                <ul>
                    <li>International BusIT (Business IT) Week</li>
                    <ul>
                        <li>I work with university students at Belgium Campus in South African , and my team
                            collaborates well together.</li>
                    </ul>
                </ul>

                <ul>
                    <li>Hack The Waste as Hackathon</li>
                    <ul>
                        <li>I did make project mobile app and solve problem for business and think design and Global
                            Networking and teamwork.</li>
                    </ul>
                </ul>
            </div>
        </div>

        <div id="Certificate">
            <h1 id="Certificate_show">Certificate:</h1>

            <div id="crefit_show">
                <div id="Agentic_Automation_Certificate">
                    <h2 id="Agentic_Automation_text">Agentic Automation:</h2>
                    <embed src="src/assets/images/Joshua Clinton - Agentic Automation Certificate of Attendance.pdf" width="45%" height="90%" />
                </div>

                <div id="Python_Certificate">
                    <h2 id="Python_text">Python:</h2>
                    <embed src="src/assets/images/Python.pdf" width="45%" height="90%" />
                </div>

                <div id="Tutoring_Certificate">
                    <h2 id="Tutoring_text">Tutoring:</h2>
                    <embed src="src/assets/images/Joshua Clinton crefit.pdf" width="40%" height="70%" />
                </div>

                <div id="button">
                    <button id="button2" class="button"><span><a href="src/assets/images/Joshua Clinton Letter Tutoring.pdf"
                                download>Tutoring PDF</a></span></button>
                </div>
            </div>

            
        </div>


    </article>

    </>
  )
}

export default About