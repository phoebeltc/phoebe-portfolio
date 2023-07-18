import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import images from "../components/Images"; 

const Works = () => {
    return <>
    <div className="frame-works"> 
        <div className='wrapper-work'>
            <p>Check out of my projects! XOXO</p>
            {/* <div className='works-listing'>
                <a href={process.env.PUBLIC_URL + "/images/Works-PoliLearn.pdf"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/PoliLearn.png"} alt="PoliLearn" className='responsive'></img></a>
                <a href={process.env.PUBLIC_URL + "/images/Works-DPD.pdf"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/DRD.png"} alt="DRD" className='responsive' ></img></a>
                <a href={process.env.PUBLIC_URL + "/images/Works-PoliLearn.pdf"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/Doglivery.png"} alt="Doglivery" className='responsive'></img></a>
                <a href={"https://www.angelface.com.hk/"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/AngelFace1.png"} alt="AngelFace" className='responsive'></img></a>
                <a href={process.env.PUBLIC_URL + "/images/Works-PoliLearn.pdf"} target="_blank"><img src={process.env.PUBLIC_URL + "/images/Menya.png"} alt="Menya" className='responsive'></img></a>
            </div> */}
            <motion.div className='carousel'>
                <motion.div className='inner-carousel'>
                    {images.map(image => {
                        return(
                            <motion.div className='item'>
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
            
        </div>
    </div> 
    </>
}

export default Works;