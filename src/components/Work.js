import githubIcon from '../images/github-mark.svg';
import arrow from '../images/arrow-right.svg';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from "react";
import Skill from './Skill';


const Work = ({
    id, title, category, gif, video, highlight, content1, content2, github, link, onClick, openIndex, index
}) => {


        const ref = useRef(null);
        const isInView = useInView(ref, {once: true}, { amount: "all" }); 

        const githubHover = {
            rest:{
                x: 0,
                y: 0
            },
            hover: {
                y: [0, 5],
            opacity: 1, 
            scale: 1,
            rotate: 0,
            transition: {
            delay: 0,
            duration: 0.5,
            repeat: Infinity,
            // repeatDelay: 0.2,
            repeatType: "reverse"
            }
            }
        }

        const arrowHover = {
            rest:{
                x: 0,
                y: 0
            },
            hover: {
                rotate: -45
            }
        }
        
        const textInView = {
            hidden: {
                opacity: 0, 
                        y: 20, 
                        transition: {
                        type: "spring", 
                        damping: 12, 
                        stiffness: 100, 
                        }
            }, 
            visible: {
                opacity: 1, 
                y: 0, 
                transition: {
                    delay: 0.1,
                    type: "spring", 
                    damping: 20, 
                    stiffness: 100, 
                }
            }
        }
        

    return <>
        <div className='details' key={id}>
                    <summary className="details_summary" onClick={onClick}>
                        <div className='summary_title'>{title}</div>
                        <div className='summary_type'>{category}</div>
                    </summary>
                    
                    {openIndex === id && 
                    
                    <div>
                    {gif &&
                    <img src={process.env.PUBLIC_URL + gif} alt="" className="work-image"></img>
                    }
                    {video &&
                    <video src={process.env.PUBLIC_URL + video} alt="" className="work-image" autoPlay muted loop />
                    }
                    <div className='details_content'>
                        <p className='content-highlight'>{highlight}</p>
                        <p>{content1}</p>
                        <p>{content2} </p>
                    </div>
                    <div className='details_link'>
                    {github &&
                        <motion.a href={github} target="_blank" className="button-work"
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={githubIcon} alt="githubIcon" className="button-icon-work" variants={githubHover} ></motion.img>
                        </motion.a>
                    }
                    {link &&
                        <motion.a href={link} target="_blank" className={ github ? 'button-work' : 'button-work-nogithub'}
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={arrow} alt="arrow" className="button-icon-work" variants={arrowHover}></motion.img>
                        </motion.a>
                    }
                    </div>
                    </div>
                    }
        </div>

    
    </>
}

export default Work;