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
            <h3 className='work-title'>CHECK OUT OF MY PROJECTS!</h3>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    className='inner-carousel'
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}>
                    {images.map(image => {
                        return(
                            <motion.div className='item' key={image} onClick={() => handleImageClick(image.link)}>
                                <img src={image.image} alt="" />
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