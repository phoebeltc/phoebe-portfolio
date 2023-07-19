import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import images from "../components/Images"; 

const Works = () => {


    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [isClickAllowed, setIsClickAllowed] = useState(true);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const handleImageClick = (url) => {
        if (isClickAllowed) {
            window.open(url, '_blank'); // Open the link in a new tab if click is allowed
        }
    };

    const handleDragStart = () => {
        setIsDragging(true);
        setIsClickAllowed(false);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setTimeout(() => {
            setIsClickAllowed(true);
        }, 200); // Adjust the delay duration as per your preference
    };
    

    return <>
    <div className="frame-works"> 
        <div className='wrapper-work'>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    className='inner-carousel'
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}>
                    <div className='work-title'>
                        <h5>Check out of my projects!</h5>
                    </div>
                    {images.map(image => {
                        return(
                            <motion.div className='item' key={image} onClick={() => handleImageClick(process.env.PUBLIC_URL + "/images/Works-PoliLearn.pdf")}>
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