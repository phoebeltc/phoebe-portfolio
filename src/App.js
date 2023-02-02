import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Header from "./components/Header";

import './sass/main.scss'; 



function App() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });



  return <>
  <div className="header"><Header /></div>
  <div className="container" ref={ref}>
    <div className="horizontal-scroll-wrapper">
      <div><Homepage /></div>
      <div><Works /></div>
      <div><About /></div>
      <div><Contact /></div>
    </div>
  </div>
  <motion.div 
    className="progress-bar"
    style={{ 
      scaleX: scrollYProgress,
    }} 
    />
  </>
  ;
}

export default App;
