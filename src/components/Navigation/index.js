import React from 'react';


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;


    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Nicolas Esquivel
				</a>
            </h2>
            <nav>
                <ul >
                    {categories.map((category) => (
                        <li key={category.name} className={currentCategory.name === category.name}>
                            <a
                                onClick={() => { setCurrentCategory(category);}}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;