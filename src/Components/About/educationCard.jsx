import React from 'react'



function educationCard({ name_school, years, coursework, other }) {
    return (
        <>
            <li>{name_school}</li>
            <ul>
                <li>{years}</li>
                <li>{coursework}</li>
                <li>{other}</li>
            </ul>
        </>
    )
}

export default educationCard

