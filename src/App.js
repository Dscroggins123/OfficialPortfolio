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




function App() {
  const [scroll, setScroll] = useState('');
  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      setScroll(window.scrollY)
    })
  }, [])

  useEffect(()=> console.log(scroll), [scroll])
 const sections = [
  <TopButton scroll={scroll}/> ,
  <AboutMe/> ,
  <Skills/>,
  <Project/>,
  <ExtraProjects/>,
  <Contact/>
  
  
]
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
          delay: .5,
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
