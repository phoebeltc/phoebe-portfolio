import Work from '../components/Work'
import githubIcon from '../images/github-mark.svg';
import arrow from '../images/arrow-right.svg';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// import PoliLearn from '../images/PoliLearn.png';
// import DRD from '../images/DRD.png';
// import Doglivery from '../images/Doglivery.png';
// import AngelFace from '../images/AngelFace1.png';
// import Menya from '../images/Menya.png';


const Works = () => {


    const [expanded, setExpanded] = useState('panel1');

    const handleClick = (panel) => e => {
        setExpanded(expanded === panel? false : panel);
    }

    const detail1 = useRef(null);



    return <>
    <div className="frame-works" ref={detail1}> 
        <div className='wrapper-work'>
            <h6>Check out of my projects!</h6>
            <div className='works-listing'>
                <a href={process.env.PUBLIC_URL + "/images/Works-PoliLearn.pdf"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/PoliLearn.png"} alt="PoliLearn" className='responsive'></img></a>
                <a href={process.env.PUBLIC_URL + "/images/Works-DPD.pdf"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/DRD.png"} alt="DRD" className='responsive' ></img></a>
                <a href={process.env.PUBLIC_URL + "/images/Works-PoliLearn.pdf"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/Doglivery.png"} alt="Doglivery" className='responsive'></img></a>
                <a href={"https://www.angelface.com.hk/"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/AngelFace1.png"} alt="AngelFace" className='responsive'></img></a>
                <a href={process.env.PUBLIC_URL + "/images/Works-Menya.pdf"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/Menya.png"} alt="Menya" className='responsive'></img></a>
            </div>
            
        </div>
    </div> 
    </>
}

export default Works;