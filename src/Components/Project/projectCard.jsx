import React from 'react'

function projectCard({ project_names, project_explain }) {
    return (
        <>
            <div className="project-card">
                <h3>{project_names}</h3>
                <p>{project_explain}</p>
            </div>
        </>
    )
}

export default projectCard