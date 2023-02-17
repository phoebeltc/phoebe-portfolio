import githubIcon from '../images/github-mark.svg';
import arrow from '../images/arrow-right.svg';
import IPAddress from '../images/IPAddressTracker.png';
import { motion } from 'framer-motion';



const Work = () => {

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

        
        

    return <>
    <div className="wrapper-work">
            <div className="work-upper">
                <h2 className="work-title">IP Address Tracker</h2>
                <div className='work-image-block'>
                    <div className="work-highlights">LATEST<br></br>WORK</div>
                    <img src={IPAddress} alt="IPAddress" className="work-image"></img>
                </div>
                <div className='work-tags'>
                    <div className='work-tag-box'><p className="work-tag">HTML</p></div>
                    <div className='work-tag-box'><p className="work-tag">SCSS</p></div>
                    <div className='work-tag-box'><p className="work-tag">Javascript</p></div>
                    <div className='work-tag-box'><p className="work-tag">API</p></div>
                </div>
        </div>
        <div className="work-lower">
            <motion.a href="https://github.com/phoebeltc" target="_blank" className="button-work"
                initial="rest" whileHover="hover" animate="rest">
                <motion.img src={githubIcon} alt="githubIcon" className="button-icon-work" variants={githubHover} ></motion.img>
            </motion.a>
            <motion.a href="https://bobbyhadz.com" target="_blank" className="button-work"
                initial="rest" whileHover="hover" animate="rest">
                <motion.img src={arrow} alt="arrow" className="button-icon-work" variants={arrowHover}></motion.img>
            </motion.a>
        </div>
    </div>
    
    </>
}

export default Work;