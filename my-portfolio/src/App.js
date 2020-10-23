import React, {useEffect, useState,useRef} from 'react';

import FrontPage from './sections/FrontPage'
import AboutMe from './sections/AboutMe'
import Skills from "./sections/Skills"
import Project from "./sections/Project/"
import ExtraProjects from "./sections/ExtraProjects";
import Contact from "./sections/Contact"

import TopButton from "./components/TopButton"


import "./App.css"
import Nav from "./components/Navi"
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  <AboutMe/> ,
  <Skills/>,
  <Project/>,
  <ExtraProjects/>,
  <Contact/>
  
  
]


function App() {
 
  const revealRefs = useRef([]);
    revealRefs.current = [];
 
    const addToRefs = section => {
        if (section && !revealRefs.current.includes(section)) {
            revealRefs.current.push(section);
        }
    };
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
         
      gsap.fromTo(el, {
          autoAlpha: 0
      }, {
          duration: 1,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
              
              trigger: el,
              start: 'top center',
              end:'bottom',
              toggleActions: 'play none none pause'
          }
      });

  });
      
  }, [])
  return (
    
    <div>
     <Nav/>
     <TopButton/>
     
    <div className="container">
    <FrontPage />
    
    {sections.map((section)=>(
      
    <div ref={addToRefs} >
      
    {section}
    </div>))
    }
    
    </div>

    </div>
    

    
  );
}

export default App;
