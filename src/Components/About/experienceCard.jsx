import React from 'react'

function experienceCard({ experience_name, explain_experience }) {
    return (
        <>
            <ul>
                <li>{experience_name}</li>
                <ul>
                    <li>
                        {explain_experience}
                    </li>
                </ul>
            </ul>
        </>
    )
}

export default experienceCard