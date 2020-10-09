import React from 'react';

function Resume() {
    const frontEnd = [
        {
            name: 'JavaScript'
        },
        {
            name: 'React'
        },
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'JQuery'
        },
        {
            name: 'Materialize'
        },
        {
            name: 'Bootstrap'
        },
    ]
    const backEnd = [
        {
            name: 'APIs'
        },
        {
            name: 'NodeJS'
        },
        {
            name: 'Express'
        },
        {
            name: 'MySQL, Sequelize'
        },
        {
            name: 'MongoDB, Mongoose'
        },
        {
            name: 'React'
        },
    ]
    const other = [
        {
            name: 'Automation Anywhere'
        },
        {
            name: 'Microsoft PowerApps'
        },
        {
            name: 'Power Automate'
        },
        {
            name: 'Dialog Flow'
        },
        {
            name: 'IBM watson'
        },
    ]
    return (
        <section>
            <div className='resume-title'>
                <h1>Resume</h1>
            </div>
            <div className="resume">
                <h2>Front End Proficiencies:</h2>
                <ul>
                    {frontEnd.map((tech) => (
                        <li
                            key={tech.name}
                        >
                            {tech.name}
                        </li>
                    ))}
                </ul>

                <h2>Back End Proficiencies:</h2>
                <ul>
                    {backEnd.map((tech) => (
                        <li
                            key={tech.name}
                        >
                            {tech.name}
                        </li>
                    ))}
                </ul>

                <h2>Others:</h2>
                <ul>
                    {other.map((tech) => (
                        <li
                            key={tech.name}
                        >
                            {tech.name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Resume;