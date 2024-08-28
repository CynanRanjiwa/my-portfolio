import React from 'react';
import './ProjectList.css';
// sample data for projects  - replace with dynamic data if needed
const projects = [
    { id: 1, title: 'Community Help Hub', description: 'A platform connecting people in need with volunteers'},
    { id: 2, title: 'Emergency Alert System', description: 'An application that sends real-time alerts to users when emergencies occur'},
    { id: 3, title: 'Smart Parking System', description: 'An automated parking system that monitors parking spaces and alerts users when they are occupied'},
];

// component to display a list of projects
function ProjectList() {
    return (
        <section className="project-list">
            <h2>My Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                    </li>
                )
            )}
            </ul>

        </section>
    );
}

export default ProjectList;