import React from 'react'
import './About.css'
import Certificate1 from '../../assets/images/Joshua Clinton - Agentic Automation Certificate of Attendance.pdf'
import Certificate2 from '../../assets/images/Python.pdf'
import Certificate3 from '../../assets/images/Joshua Clinton crefit.pdf'
import ima1 from '../../assets/images/IMG_4956.jpeg'
import ima2 from '../../assets/images/CD2A5931-420B-4574-B626-833C7F9F02AD.jpeg'
import pdf from '../../assets/images/Joshua Clinton Letter Tutoring.pdf'

function About() {
    const education = [{
        name_school: "Diploma of Information Technology",
        years: "From 2023 to 2026",
        coursework: "Relevant coursework: Software Development and total 13/24 Distinctions for modules or subjects",
        other: "Programming, Database, Website and Software Testing and Software Analysis & Design,mathematics, and mathematics statistics."
    },
    {
        name_school: "Fulton School for the Deaf",
        years: "2019-2022: Top Achievement",
        coursework: "2022: Grade 12 RCL representative and Award dux, Top Achievement, 6/7 Subject or modules over 70% in SBA and presession.",
        other: " Hution Bursary award R20 000."
    }]

    const experience = [{
        experience_name: "Belgium Campus Tutoring Peering program",
        explain_experience: "I have taught both hearing and deaf students, and I can help with any topic-related problems from modules in Programming, Database, Website and Software Testing and Software Analysis & Design, mathematics, and mathematics statistics. I am skilled in using English and sign language to teach students, and communication and time management"
    },
    {
        experience_name: "Hack the Waste at Hackathon",
        explain_experience: "International Hackathon 2023 online: I participated in an online international event on waste management called Hackwaste."
    },
    {
        experience_name: "International BusIT (Business IT) Week",
        explain_experience: "I work with university students at Belgium Campus in South Africa, and my team collaborates well together."
    },
    {
        experience_name: "Hack The Waste at Hackathon",
        explain_experience: "I made a mobile app and solved problems for businesses and think design and Global Networking and teamwork."
    }
    ]
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
                    <img class="photoicon" src={ima1} />

                    <div id="textexper">
                        <h2>Education:</h2>
                        <ul>
                            {education.map(item => <><li key={item}>{item.name_school}
                            </li>
                                <ul key={item}>
                                    <li key={item}>{item.years}</li>
                                    <li key={item}>{item.coursework}</li>
                                    <li key={item}>{item.other}</li>
                                </ul></>)}
                        </ul>

                    </div>
                </div>

                <div id="Experience">
                    <img class="photoicon" src={ima2} />
                    <div id="experience_article">
                        <h2>Experience:</h2>
                        {experience.map(item => <>
                            <ul key={item}>
                                <li key={item}>{item.experience_name}</li>
                                <ul key={item}>
                                    <li key={item}>
                                        {item.explain_experience}
                                    </li>
                                </ul>
                            </ul></>)}
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