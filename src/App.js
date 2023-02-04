import React, { useRef } from "react";
import { motion, AnimatePresence, useCycle, useScroll, useTransform } from "framer-motion";

import logo from './images/phoebe-logo.svg'; 

import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

import './sass/main.scss'; 



function App() {


  //Toggle menu icon 
  const [open, cycleOpen] = useCycle(false, true);

  const home = useRef(null);
  const works = useRef(null); 
  const about = useRef(null); 
  const contact = useRef(null); 

  



  return <>
  <div className="header">
        <div className='nav-bar'>
            <img src={logo} alt="Phoebe Logo"  className='home-logo' onClick = {() => home.current.scrollIntoView({ behavior: 'smooth'})} />
            <div className='menu-icon' onClick={() => cycleOpen()}>
                <input className="menu-icon__checkbox" type="checkbox" />
                <div>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <AnimatePresence>
            {
                open && (
                <motion.div className="wrapper"
                    initial={{height:0}}
                    animate={{height:"100vh"}}
                    exit={{
                        height:0,
                        transition: { delay: 0, duration: 0.3 }
                    }}
                >
                    <span onClick ={() => {works.current.scrollIntoView({ behavior: 'smooth'}); cycleOpen()}}>WORKS</span>
                    <span onClick ={() => {about.current.scrollIntoView({ behavior: 'smooth'}); cycleOpen()}}>ABOUT</span>
                    <span onClick ={() => {contact.current.scrollIntoView({ behavior: 'smooth'}); cycleOpen()}}>CONTACT</span>
                </motion.div>
                )
            }
            </AnimatePresence>
        </div>
    </div>


  <div className="container">
    <div className="horizontal-scroll-wrapper">
      <div ref={home}><Homepage /></div>
      <div ref={works}><Works /></div>
      <div ref={about}><About /></div>
      <div ref={contact}><Contact /></div>
    </div>
  </div>
  </>
  ;
}

export default App;
