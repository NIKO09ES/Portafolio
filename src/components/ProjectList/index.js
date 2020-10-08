import React, { useState } from 'react';

function ProjectList() {

    const [projects] = useState([
        {
            name: 'gitDevJob',
            image: 'gitDevJob.PNG',
            technologies: 'JS/Node.js/Express.js/MySQL2/Sequelize',
            deploy: 'https://secret-journey-15196.herokuapp.com/',
            gitrepository: 'https://github.com/jeoldmixon/TeamProject2',
        },
        {
            name: 'Portafolio',
            image: 'Portafolio.PNG',
            technologies: 'Advance CSS',
            deploy: 'https://secret-journey-15196.herokuapp.com/',
            gitrepository: 'https://niko09es.github.io/new-repository/',
        },
        {
            name: 'Pet Tinder',
            image: 'Pet.JPG',
            technologies: 'HTML/CSS/JS/API',
            deploy: 'https://dwill1440.github.io/pet-tinder/',
            gitrepository: 'https://github.com/DWill1440/pet-tinder',
        },
        {
            name: 'Run Buddy',
            image: 'Run-Buddy.JPG',
            technologies: 'HTML/CSS',
            deploy: 'https://niko09es.github.io/run-buddy/',
            gitrepository: 'https://NIKO09ES.github.io/run-buddy/',
        }
    ]);

    return (
        <section class="working">
            <h1>Portfolio</h1>
            <ul className="projects">
                {projects.map((project) => (
                    <li className="card">
                        <div className='project'>
                            <h3>
                                <span>
                                    <a href={project.gitrepository}>
                                        <img
                                            src={require(`../../assets/icon/gitwhite.jpg`)}
                                            alt='GitHub'
                                            className='project-icon'
                                        />
                                        
                                    </a>
                                </span>
                                {project.name}
                            </h3>
                        </div>
                        <img
                            src={require(`../../assets/Projects/${project.image}`)}
                            alt={project.name}
                            className='project-img'
                        />   
                        <p className="tecnology">{project.technologies}</p>                     
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProjectList;