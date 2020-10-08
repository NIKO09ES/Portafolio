import React from 'react';

function About() {
    return (
        <section className="my-5">
            <h1 id="about">About Me</h1>

            <img
                src={require(`../../assets/images/nico.png`)}
                alt='me'
                className='me'
            />
            <p>I am an innovative bilingual industrial engineer with 7 years of experience as a functional analyst in private as well as public financial entities, collaborating with the development and implementation of the Sifi Software. After being in charge of the configuration of Sifi, upgrading of the software, running tests to ensure that the software met the specifications needed, writing manuals and other documentations, and training existing users on new capabilities, I realized that I wanted to focus on my career as a web developer. In the past two years I embarked myself on a new professional journey that has allowed me to explore different areas such as building websites.</p>
            <p>While I am an Automation Anywhere Certified Advanced RPA(Robot Process Automation) Professional, my expertise is on building Chatbots.</p>
            <p> I am currently expanding my knowledge by attending the Web Development program at UT Austin.</p>
        </section>
    );
}

export default About;