import React, {useEffect, useState} from 'react';
import FrontPage from './sections/FrontPage'
import AboutMe from './sections/AboutMe'
import Skills from "./sections/Skills"
import Project from "./sections/Project/"
import "./App.css"
import Nav from "./components/Navi"




function App() {
  const [scroll, setScroll] = useState('');
  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      setScroll(window.scrollY)
    })
  }, [])

  useEffect(()=> console.log(scroll), [scroll])
  return (
    <div>
     <Nav/>
    <div className="container">
    <FrontPage opacity={(1-((scroll>450 ? 450 : scroll)/450))**.5}/>
    <AboutMe />
    <Skills/>
    <Project/>
    </div>
    </div>
  );
}

export default App;
