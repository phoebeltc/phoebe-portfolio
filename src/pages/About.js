import { motion } from "framer-motion";

import passion from '../images/passion.png';
import patient from '../images/patient.png';
import eye from '../images/eye.png';

const float = {
        y: [-5, 5],
        opacity: 1, 
        scale: 1,
        rotate: 0,
        transition: {
            delay: 0,
            duration: 2,
            repeat: Infinity,
            // repeatDelay: 0.2,
            repeatType: "reverse"
        }
}

const About = () => {


    return <>
    <div className="frame-about">
        <motion.div className="about-description"
        >
            <h3>I ‘m Phoebe.</h3>
            <h4>After working 2 years as a web designer in Hong Kong, I now decided to be a front-end developer in London on exciting ideas and codes.  
                <br></br>
                <br></br>
                I enjoy creating beautiful, accessible and responsive websites using HTML, CSS, Tailwind, SASS, SCSS and React. I am currently learning Typescript as well. I combined my web design expertise with front-end development which help to build the website looking close to the design.</h4>
        </motion.div>
        <div className="about-p">
        <motion.img src={passion} alt="passion" className='smallimg-about'
            animate={float}
        />
            <h5>Passion</h5>
            <div className='content-box-about'>
                <p className='text-about'>I love the process of taking a design and bringing it to life on the web. I enjoy the challenge of creating visually appealing and user-friendly interfaces, and the satisfaction of seeing people interact with my work. 
                <br></br><br></br>
                I am always eager to learn new technologies and techniques to improve my skills and deliver the best possible experience for my users.</p>
            </div>
        </div>

        <div className="about-p">
            <motion.img src={eye} alt="eye" className='smallimg-about eye-about'
            style={{ rotate: 25 }}
            animate={float}
            />
            <h5>Pay Attention to Detail</h5>
            <div className='content-box-about'>
                <p className='text-about'>I pay close attention to detail to ensure that the final product is visually pleasing and user-friendly. I pay attention to the small details such as the spacing, alignment, and color scheme to make sure they are consistent across the website. 
                <br></br><br></br>
                I also test the website on different screen sizes and browsers to make sure it looks great and works well for all users. I take pride in my attention to detail and strive to deliver high-quality, polished front-end development work.</p>
            </div>
        </div>

        <div className="about-p">
            <motion.img src={patient} alt="patient" className='smallimg-about' 
            animate={float}
            />
            <h5>Patient</h5>
            <div className='content-box-about'>
                <p className='text-about'>I understand that development projects can be complex and often require a significant amount of time and effort. I am able to work with a sense of calm and focus, even when faced with challenges and setbacks. 
                <br></br><br></br>
                I am also able to work well with others, and am always willing to lend a hand to my team members when needed. I believe that by being patient and working well with others, I am able to create better and more efficient solutions for the projects I am working on.</p>
            </div>
        </div>
    </div> 
    </>
}

export default About;