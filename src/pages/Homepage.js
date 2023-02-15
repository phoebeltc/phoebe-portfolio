import { motion } from "framer-motion";

import pig from '../images/pig.png';
import cooking from '../images/cooking.png';
import eye from '../images/eye.png';
import hongkong from '../images/hong_kong.png';
import passion from '../images/passion.png';
import patient from '../images/patient.png';

const Homepage = () => {

    const container = {
        hidden: { opacity: 0 }, 
        visible: {
            opacity: 1, 
            transition: {
                delayChildren: 0.5, 
                staggerChildren: 0.5
            }
        }
    }

    const child = {
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
                type: "spring", 
                damping: 12, 
                stiffness: 100, 
            }
        }
    }

    return <>
    <div className="frame-homepage">
        <div className='image-homepage'>
            <motion.img src={pig} alt="pig" className='pig-homepage'
                initial={{ x: 300, y: 300 }}
                animate={{ x: -10, y: -60}}
                transition={{ type: "spring", stiffness: 8, damping: 7}}
                drag
                dragConstraints={{ top: -125, right: 125, bottom: 50, left: -125 }}
                dragTransition={{ bounceStiffnes: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            />
            <motion.img src={cooking} alt="cooking" className='cooking-homepage' 
                initial={{ x: -200, y: -300}}
                animate={{ x: 125, y: -40}}
                transition={{ type: "spring", stiffness: 8, damping: 7}}
                drag
                dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
                dragTransition={{ bounceStiffnes: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            />
            <motion.img src={eye} alt="eye" className='eye-homepage'
                initial={{ x: 300, y: -400 }}
                animate={{ x: 0, y: 0}}
                transition={{ type: "spring", stiffness: 8, damping: 7}}
                drag
                dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
                dragTransition={{ bounceStiffnes: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            />
            <motion.img src={hongkong} alt="hongkong" className='hongkong-homepage'
                initial={{ x: 0, y: -600 }}
                animate={{ x: 0, y: 0}}
                transition={{ type: "spring", stiffness: 8, damping: 7}}
                drag
                dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
                dragTransition={{ bounceStiffnes: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            />
            <motion.img src={passion} alt="passion" className='passion-homepage'
                initial={{ x: 300, y: -300 }}
                animate={{ x: 0, y: 0}}
                transition={{ type: "spring", stiffness: 8, damping: 7}}
                drag
                dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
                dragTransition={{ bounceStiffnes: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            />
            <motion.img src={patient} alt="patient" className='patient-homepage'
                initial={{ x: -300, y: 300 }}
                animate={{ x: 0, y: 0}}
                transition={{ type: "spring", stiffness: 8, damping: 7}}
                drag
                dragConstraints={{ top: -125, right: 125, bottom: 125, left: -125 }}
                dragTransition={{ bounceStiffnes: 600, bounceDamping: 20 }}
                dragElastic={0.5}
                whileTap={{ cursor: "grabbing" }}
            />
        </div>
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 variants={child}>HI.</motion.h1>
            <motion.h1 variants={child}>I AM PHOEBE LEUNG.</motion.h1>
            <motion.h1 variants={child}>FRONT END</motion.h1>
            <motion.h1 variants={child}>DEVELOPER &amp; DESIGNER </motion.h1>
            <motion.h1 variants={child} className="space-homepage">BASED         in LONDON.</motion.h1>
        </motion.div>
        <div className="footer-homepage">
            <p>WELCOME TO My Portfolio Website.</p>
            <motion.div className="scroll"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 3, default: { ease: [0, 0.71, 0.2, 1.01] }, scale: {
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.001
                } }}
            >
                <p>SCROLL</p>
            </motion.div>
        </div>
    </div> 
    </>
}

export default Homepage;

