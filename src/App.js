import React, { useState } from 'react';
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";
import ContactForm from './components/Contact';
import ProjectList from './components/ProjectList';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: "About",
    },
    {
      name: "Contact"
    },
    {
      name: "Projects",
    },
    {
      name: "Resume",
    },
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0])
  const renderPage = () => {
    switch (currentCategory.name) {
      case 'About':
        return <About />
      case 'Contact':
        return <ContactForm />
      case 'Projects':
        return <ProjectList />
      case 'Resume':
        return <Resume />
      default:
        return <About />
    }
  };
  return (
    <body>
      <header>
        <Navigation
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Navigation>
      </header>
      <main>
        {renderPage(currentCategory.name)}
      </main>
      <Footer />
    </body>
  );
}

export default App;