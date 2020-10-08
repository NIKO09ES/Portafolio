import React from 'react';

function Footer () {
    const links = [
        {
            name: 'GitHub',
            src: 'https://github.com/NIKO09ES',
            icon: 'github.png',
        },
        {
            name: 'LinkedIn',
            src: 'https://www.linkedin.com/in/nicolas-esquivel-720b821a6/',
            icon: 'linkedin.png',
        },
        {
            name: 'stack',
            src: 'https://stackoverflow.com/users/13365694/nicolas-esquivel',
            icon: 'stack.png',
        }
    ];
    return (
        <footer>
            {links.map((link) => (
                <a 
                href={link.src}
                target="_blank"
                key={links.name}
                >
                    <img src= {require(`../../assets/icon/${link.icon}`)}
                    alt={link.name}
                    className="icon"
                    />
                </a>
            ))}
        </footer>
    )
}

export default Footer;