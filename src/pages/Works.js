import Work from '../components/Work'
import githubIcon from '../images/github-mark.svg';
import arrow from '../images/arrow-right.svg';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';



const Works = () => {

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

    const [expanded, setExpanded] = useState('panel1');

    const handleClick = (panel) => e => {
        setExpanded(expanded === panel? false : panel);
    }

    const windowWidth = useRef(window.innerWidth);
    const detail1 = useRef(null);
    const detail2 = useRef(null);
    const detail3 = useRef(null);
    const detail4 = useRef(null);
    const detail5 = useRef(null);
    const detail6 = useRef(null);


    return <>
    <div className="frame-works" ref={detail1}> 
        <div className='wrapper-work'>
            <section className="details-group">

                {/* ID1 */}
                <div className='details'>
                    <div onClick={(e) => {
                    e.preventDefault();
                    if (windowWidth.current <= 960) {
                        setTimeout(()=> {detail1.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                    } else {
                        console.log(windowWidth.current)
                    }
                }}>
                        <summary className="details_summary" onClick={handleClick("panel1")}>
                            <div className='summary_title' >Menya Musashi Hong Kong</div>
                            <div className='summary_type'ref={detail2}>UI/UX Design</div>
                        </summary>
                    </div>
                    {expanded === "panel1" && (
                    
                    <div>
                    <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="MenyaMusashi" className="work-image"></img>
                    {/* {video &&
                    <video src={process.env.PUBLIC_URL + video} alt="" className="work-image" autoPlay muted loop />
                    } */}
                    <div className='details_content'>
                        <p className='content-highlight'>A Japanese Restaurants website design with CMS</p>
                        <p>Menya Musashi is a highly regarded Japanese restaurant that has gained a reputation for its exceptional ramen dishes. The restaurant's brand design incorporates a samurai theme that is reflected in the use of traditional Japanese ink-wash painting style. The predominant use of black in the design not only evokes a sense of sophistication and elegance but also helps to draw attention to the colorful promotional banners and the vibrant ramen dishes.</p>
                        <p>In addition to its strong branding, Menya Musashi's website features a user-friendly design that allows users to easily stay informed about the restaurant's latest news and updates. The news announcements are prominently displayed on the homepage in boxes located at the bottom of the page, eliminating the need for users to navigate to a separate news page. This streamlined approach enhances the user experience, making it more convenient for customers to stay up-to-date on Menya Musashi's latest offerings and promotions.</p>
                    </div>
                    <div className='details_link'>
                    {/* {github &&
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
                    } */}
                    </div>
                    </div>
                    )}
                </div>

                {/* ID2 */}
                <div className='details'>
                    <div onClick={(e) => {
                    e.preventDefault();
                    if (windowWidth.current <= 960) {
                        setTimeout(()=> {detail2.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                    } else {
                        console.log(windowWidth.current)
                    }
                }}>
                    <summary className="details_summary" onClick={handleClick("panel2")}>
                        <div className='summary_title'>AngelFace Hong Kong</div>
                        <div className='summary_type' ref={detail3}>UI/UX Design</div>
                    </summary>
                    </div>
                    
                    {expanded === "panel2" && (
                    <div 
                    className='details_wrapper'
                    >
                    {/* <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="" className="work-image"></img> */}
                    <video src={process.env.PUBLIC_URL + "./images/AngelFace.mp4"} alt="AngelFace" className="work-image" autoPlay muted loop />
                    <div className='details_content'>
                        <p className='content-highlight'>Website design with CMS of a beauty company professional</p>
                        <p>AngelFace is a renowned weight loss company based in Hong Kong. They offer a range of services, including weight loss programs, facial treatments, and massage therapy. As the lead designer, I faced numerous challenges in communicating with the client directly throughout the project. However, by paying meticulous attention to detail and maintaining clear communication with the client, I successfully created a corporate website with a CMS.</p>
                        <p>The website was designed to highlight the company's offerings by using banners that could be easily changed using the CMS. This enabled the client to update the promotional messages, showcase various treatments, and run different promotions. To maintain an elegant look and feel, I used the brand's signature color, purple, as the highlight color for buttons and font instead of the background color. This design choice helped to embellish the website's appearance, while also staying consistent with the brand's visual identity.</p>
                    </div>
                    <div className='details_link'>
                        {/* <motion.a href="https://github.com/phoebeltc/09_ip-address-tracker-master" target="_blank" className="button-work"
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={githubIcon} alt="githubIcon" className="button-icon-work" variants={githubHover} ></motion.img>
                        </motion.a> */}
                        <motion.a href="https://www.angelface.com.hk/" target="_blank" className='button-work'
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={arrow} alt="arrow" className="button-icon-work" variants={arrowHover}></motion.img>
                        </motion.a>
                    </div>
                    </div>
                    )}
                </div>

                {/* ID3 */}
                <div className='details'>
                    <div onClick={(e) => {
                        e.preventDefault();
                        if (windowWidth.current <= 960) {
                            setTimeout(()=> {detail3.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                        } else {
                            console.log(windowWidth.current)
                        }
                    }}>
                        <summary className="details_summary" onClick={handleClick("panel3")}>
                            <div className='summary_title'>IP Address Tracker</div>
                            <div className='summary_type' ref={detail4}>Web Development</div>
                        </summary>
                    </div>
                    
                    {expanded === "panel3" && (
                    <div 
                    className='details_wrapper'
                    // onClick={()=> console.log(detail2.current.scrollHeight)}
                    >
                    <video src={process.env.PUBLIC_URL + "./images/IPAddressTracker.mp4"} alt="" className="work-image" autoPlay muted loop />
                    <div className='details_content'>
                        <p className='content-highlight'>An IP Address Tracking app by Using two separate APIs together</p>
                        <p>During my recent API usage practice with JavaScript, I worked on a project that allowed users to search for the details of any IP address or domain. The project involved using LeafletJS initially, but I found it more interesting to change it to the Google Map interface, although the documentation did not provide any instructions for doing so. However, I was able to find a solution by searching on Google.</p>
                        <p>The main challenge of this project was to allow users to search for both IP addresses and domains and display their key information and location. At first, I only wrote the script for searching IP addresses, which was the most challenging aspect of the project. However, I eventually discovered a solution by using the .concat method to add the domain option to the API fetch, allowing the search for both IP and domain. Overall, this practice helped me become more familiar with using APIs and taught me more about how to find solutions on the internet.</p>
                    </div>
                    <div className='details_link'>
                        <motion.a href="https://github.com/phoebeltc/09_ip-address-tracker-master" target="_blank" className="button-work"
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={githubIcon} alt="githubIcon" className="button-icon-work" variants={githubHover} ></motion.img>
                        </motion.a>
                        <motion.a href="https://09-ip-address-tracker-master.vercel.app/" target="_blank" className='button-work'
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={arrow} alt="arrow" className="button-icon-work" variants={arrowHover}></motion.img>
                        </motion.a>
                    </div>
                    </div>
                    )}
                </div>

                {/* ID4 */}
                <div className='details'>
                    <div onClick={(e) => {
                        e.preventDefault();
                        if (windowWidth.current <= 960) {
                            setTimeout(()=> {detail4.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                        } else {
                            console.log(windowWidth.current)
                        }
                    }}>
                        <summary className="details_summary" onClick={handleClick("panel4")}>
                            <div className='summary_title'>News Homepage</div>
                            <div className='summary_type' ref={detail5}>Web Development</div>
                        </summary>
                    </div>
                    
                    {expanded === "panel4" && (
                    <div 
                    className='details_wrapper'
                    // onClick={()=> console.log(detail2.current.scrollHeight)}
                    >
                    <video src={process.env.PUBLIC_URL + "./images/News.mp4"} alt="" className="work-image" autoPlay muted loop />
                    <div className='details_content'>
                        <p className='content-highlight'>A News Homepage by using React and SCSS</p>
                        <p>My goal is to create a news homepage using React as a means to practice utilising the props function and creating duplicate items using function elements. In addition, I plan to develop a systematic file structure for the project. To do this, I've determined the appropriate font size, font weight, and colour through Figma, which will help me create valuable SCSS variables and ensure that I am using H1 and H2 tags consistently. By doing so, I hope to avoid messy coding in CSS and create a more streamlined development process.</p>
                        <p>My next challenge will be to integrate a backend system to fetch data for the website.</p>
                    </div>
                    <div className='details_link'>
                        <motion.a href="https://github.com/phoebeltc/11_news-homepage" target="_blank" className="button-work"
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={githubIcon} alt="githubIcon" className="button-icon-work" variants={githubHover} ></motion.img>
                        </motion.a>
                        <motion.a href="https://11-news-homepage.vercel.app/" target="_blank" className='button-work'
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={arrow} alt="arrow" className="button-icon-work" variants={arrowHover}></motion.img>
                        </motion.a>
                    </div>
                    </div>
                    )}
                </div>
                
                {/* ID5 */}
                <div className='details'>
                <div onClick={(e) => {
                    e.preventDefault();
                    if (windowWidth.current <= 960) {
                        setTimeout(()=> {detail5.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                    } else {
                        console.log(windowWidth.current)
                    }
                }}>
                    <summary className="details_summary" onClick={handleClick("panel5")}>
                        <div className='summary_title'>JCCAC 10th Anniversary</div>
                        <div className='summary_type' ref={detail6}>Souvenir design | Illustration</div>
                    </summary>
                </div>                    
                    {expanded === "panel5" && (
                    <div 
                    className='details_wrapper'
                    >
                    <img src={process.env.PUBLIC_URL + "/images/jccac.gif"} alt="" className="work-image"></img>
                    <div className='details_content'>
                        <p className='content-highlight'>Tote bag and pins design</p>
                        <p>JCCAC is a dynamic multi-disciplinary arts centre located in Hong Kong. In celebration of its 10th anniversary, the festival's theme, "Factory Forward", pays homage to JCCAC's heritage as a factory and highlights its continued commitment to innovation, as its creators strive to reach new audiences and partners.</p>
                        <p>As part of the festival, I was tasked with designing souvenirs, including four types of pins that represent products of old factories in Hong Kong. Creating the pin designs was an exciting challenge for me, as it was my first time doing so. One of the most challenging aspects was emphasizing the stroke, which represents the texture of the product, such as the uneven surface of letterpress type. I wanted to ensure that the stroke was noticeable and conveyed the intended effect. Another challenge was selecting appropriate colors for the designs. Gradient colors were not an option, as they could not be accurately printed. Some layouts initially utilized gradient colors, but by collaborating with the project manager, we were able to refine the designs and find solutions that made the design process smoother.</p>
                    </div>
                    {/* <div className='details_link'>
                        <motion.a href="https://github.com/phoebeltc/09_ip-address-tracker-master" target="_blank" className="button-work"
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={githubIcon} alt="githubIcon" className="button-icon-work" variants={githubHover} ></motion.img>
                        </motion.a>
                        <motion.a href="https://09-ip-address-tracker-master.vercel.app/" target="_blank" className='button-work'
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={arrow} alt="arrow" className="button-icon-work" variants={arrowHover}></motion.img>
                        </motion.a>
                    </div> */}
                    </div>
                    )}
                </div>

                {/* ID6 */}
                <div className='details'>
                    <div
                onClick={(e) => {
                    e.preventDefault();
                    if (windowWidth.current <= 960) {
                        setTimeout(()=> {detail6.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                    } else {
                        console.log(windowWidth.current)
                    }
                }}>
                        <summary className="details_summary" onClick={handleClick("panel6")}>
                            <div className='summary_title'>TAGather Goods Design Award</div>
                            <div className='summary_type'>Video filming | Editing</div>
                        </summary>
                    </div>
                    
                    {expanded === "panel6" && (
                    <div 
                    className='details_wrapper'
                    >
                    <video src={process.env.PUBLIC_URL + "./images/TAGtherGoods.mp4"} alt="" className="work-image" controls />
                    <div className='details_content'>
                        <p className='content-highlight'>Stop-motion video creation</p>
                        <p>TAGather Goods is a rapidly growing fashion brand based in Taiwan that specializes in developing bags and accessories made of PVC canvas sheets. Their approach to design emphasizes the importance of local storytelling and craftsmanship to create stylish and meaningful products. The brand's commitment to quality is reflected in their receipt of the Golden Pin Design Award.</p>
                        <p>To promote their products, TAGather Goods tasked me with creating a video that showcases the usage of their bags and effectively communicates the brand's message. With a zero budget, I decided to use stop-motion animation to bring the bags to life. The main challenge during the video shoot was the small conference room, which caused the videographer's shadow to appear in some of the photos. Despite this, I proceeded with the shoot and addressed the shadow issue by photoshopping it out of each photo in post-production. One memorable aspect of the project was the editing process. Due to time constraints, I chose the background music after the shoot had taken place. I selected a track that contained rhythms at the beginning, which inspired me to add hand movements that demonstrate how a slice of PVC canvas sheet can be transformed into a bag.</p>
                    </div>
                    {/* <div className='details_link'>
                        <motion.a href="https://github.com/phoebeltc/09_ip-address-tracker-master" target="_blank" className="button-work"
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={githubIcon} alt="githubIcon" className="button-icon-work" variants={githubHover} ></motion.img>
                        </motion.a>
                        <motion.a href="https://09-ip-address-tracker-master.vercel.app/" target="_blank" className='button-work'
                            initial="rest" whileHover="hover" animate="rest">
                            <motion.img src={arrow} alt="arrow" className="button-icon-work" variants={arrowHover}></motion.img>
                        </motion.a>
                    </div> */}
                    </div>
                    )}
                </div>
            
            </section>
        </div>
        <div className='image-works'>
            {expanded === "panel1" && (
                <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="MenyaMusashi" className="work-image-desktop"></img>
            )}
            {expanded === "panel2" && (
                <video src={process.env.PUBLIC_URL + "./images/AngelFace.mp4"} alt="AngelFace" className="work-image-desktop" autoPlay muted loop />
            )}
            {expanded === "panel3" && (
                <video src={process.env.PUBLIC_URL + "./images/IPAddressTracker.mp4"} alt="" className="work-image-desktop" autoPlay muted loop />
            )}
            {expanded === "panel4" && (
                <video src={process.env.PUBLIC_URL + "./images/News.mp4"} alt="" className="work-image-desktop" autoPlay muted loop />
            )}
            {expanded === "panel5" && (
                <img src={process.env.PUBLIC_URL + "/images/jccac.gif"} alt="" className="work-image-desktop"></img>
            )}
            {expanded === "panel6" && (
                <video src={process.env.PUBLIC_URL + "./images/TAGtherGoods.mp4"} alt="" className="work-image-desktop" controls />
            )}
        </div>
    </div> 
    </>
}

export default Works;