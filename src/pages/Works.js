import Work from '../components/Work'
import githubIcon from '../images/github-mark.svg';
import arrow from '../images/arrow-right.svg';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';



const Works = () => {

    const works = [
        {
            "id": "1",
            "title": "Menya Musashi Hong Kong",
            "category": "UI/UX Design",
            "gif": "/images/menya.gif", 
            "highlight": "A Japanese Restaurants website design with CMS",
            "content1": "Menya Musashi is a highly regarded Japanese restaurant that has gained a reputation for its exceptional ramen dishes. The restaurant's brand design incorporates a samurai theme that is reflected in the use of traditional Japanese ink-wash painting style. The predominant use of black in the design not only evokes a sense of sophistication and elegance but also helps to draw attention to the colorful promotional banners and the vibrant ramen dishes.", 
            "content2": "In addition to its strong branding, Menya Musashi's website features a user-friendly design that allows users to easily stay informed about the restaurant's latest news and updates. The news announcements are prominently displayed on the homepage in boxes located at the bottom of the page, eliminating the need for users to navigate to a separate news page. This streamlined approach enhances the user experience, making it more convenient for customers to stay up-to-date on Menya Musashi's latest offerings and promotions.",
            "github": "", 
            "link": ""
        },
        {
            "id": "2",
            "title": "IP Address Tracker ",
            "category": "Web Development",
            "video": "/images/IPAddressTracker.mp4", 
            "highlight": "An IP Address Tracking app by Using two separate APIs together",
            "content1": "During my recent API usage practice with JavaScript, I worked on a project that allowed users to search for the details of any IP address or domain. The project involved using LeafletJS initially, but I found it more interesting to change it to the Google Map interface, although the documentation did not provide any instructions for doing so. However, I was able to find a solution by searching on Google.", 
            "content2": "The main challenge of this project was to allow users to search for both IP addresses and domains and display their key information and location. At first, I only wrote the script for searching IP addresses, which was the most challenging aspect of the project. However, I eventually discovered a solution by using the .concat method to add the domain option to the API fetch, allowing the search for both IP and domain. Overall, this practice helped me become more familiar with using APIs and taught me more about how to find solutions on the internet.",
            "github": "https://github.com/phoebeltc/09_ip-address-tracker-master", 
            "link": "https://09-ip-address-tracker-master.vercel.app/"
        }
        
    ]

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
                <div className='details'
                onClick={(e) => {
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
                    
                    {expanded === "panel1" && (
                    
                    <div>
                    <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="" className="work-image"></img>
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
                <div className='details'
                onClick={(e) => {
                    e.preventDefault();
                    if (windowWidth.current <= 960) {
                        setTimeout(()=> {detail2.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                    } else {
                        console.log(windowWidth.current)
                    }
                }}
                >
                    <summary className="details_summary" onClick={handleClick("panel2")}>
                        <div className='summary_title'>Menya Musashi Hong Kong</div>
                        <div className='summary_type' ref={detail3}>UI/UX Design</div>
                    </summary>
                    
                    {expanded === "panel2" && (
                    <div 
                    className='details_wrapper'
                    // onClick={()=> console.log(detail2.current.scrollHeight)}
                    >
                    <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="" className="work-image"></img>
                    {/* {video &&
                    <video src={process.env.PUBLIC_URL + video} alt="" className="work-image" autoPlay muted loop />
                    } */}
                    <div className='details_content'>
                        <p className='content-highlight'>A Japanese Restaurants website design with CMS</p>
                        <p>Menya Musashi is a highly regarded Japanese restaurant that has gained a reputation for its exceptional ramen dishes. The restaurant's brand design incorporates a samurai theme that is reflected in the use of traditional Japanese ink-wash painting style. The predominant use of black in the design not only evokes a sense of sophistication and elegance but also helps to draw attention to the colorful promotional banners and the vibrant ramen dishes.</p>
                        <p>In addition to its strong branding, Menya Musashi's website features a user-friendly design that allows users to easily stay informed about the restaurant's latest news and updates. The news announcements are prominently displayed on the homepage in boxes located at the bottom of the page, eliminating the need for users to navigate to a separate news page. This streamlined approach enhances the user experience, making it more convenient for customers to stay up-to-date on Menya Musashi's latest offerings and promotions.</p>
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

                {/* ID3 */}
                <div className='details' 
                    onClick={(e) => {
                        e.preventDefault();
                        if (windowWidth.current <= 960) {
                            setTimeout(()=> {detail3.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                        } else {
                            console.log(windowWidth.current)
                        }
                    }}>
                    <summary className="details_summary" onClick={handleClick("panel3")}>
                        <div className='summary_title'>Menya Musashi Hong Kong</div>
                        <div className='summary_type' ref={detail4}>UI/UX Design</div>
                    </summary>
                    
                    {expanded === "panel3" && (
                    <div 
                    className='details_wrapper'
                    // onClick={()=> console.log(detail2.current.scrollHeight)}
                    >
                    <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="" className="work-image"></img>
                    {/* {video &&
                    <video src={process.env.PUBLIC_URL + video} alt="" className="work-image" autoPlay muted loop />
                    } */}
                    <div className='details_content'>
                        <p className='content-highlight'>A Japanese Restaurants website design with CMS</p>
                        <p>Menya Musashi is a highly regarded Japanese restaurant that has gained a reputation for its exceptional ramen dishes. The restaurant's brand design incorporates a samurai theme that is reflected in the use of traditional Japanese ink-wash painting style. The predominant use of black in the design not only evokes a sense of sophistication and elegance but also helps to draw attention to the colorful promotional banners and the vibrant ramen dishes.</p>
                        <p>In addition to its strong branding, Menya Musashi's website features a user-friendly design that allows users to easily stay informed about the restaurant's latest news and updates. The news announcements are prominently displayed on the homepage in boxes located at the bottom of the page, eliminating the need for users to navigate to a separate news page. This streamlined approach enhances the user experience, making it more convenient for customers to stay up-to-date on Menya Musashi's latest offerings and promotions.</p>
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
                <div className='details'
                    onClick={(e) => {
                        e.preventDefault();
                        if (windowWidth.current <= 960) {
                            setTimeout(()=> {detail4.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                        } else {
                            console.log(windowWidth.current)
                        }
                    }}>
                    <summary className="details_summary" onClick={handleClick("panel4")}>
                        <div className='summary_title'>Menya Musashi Hong Kong</div>
                        <div className='summary_type' ref={detail5}>UI/UX Design</div>
                    </summary>
                    
                    {expanded === "panel4" && (
                    <div 
                    className='details_wrapper'
                    // onClick={()=> console.log(detail2.current.scrollHeight)}
                    >
                    <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="" className="work-image"></img>
                    {/* {video &&
                    <video src={process.env.PUBLIC_URL + video} alt="" className="work-image" autoPlay muted loop />
                    } */}
                    <div className='details_content'>
                        <p className='content-highlight'>A Japanese Restaurants website design with CMS</p>
                        <p>Menya Musashi is a highly regarded Japanese restaurant that has gained a reputation for its exceptional ramen dishes. The restaurant's brand design incorporates a samurai theme that is reflected in the use of traditional Japanese ink-wash painting style. The predominant use of black in the design not only evokes a sense of sophistication and elegance but also helps to draw attention to the colorful promotional banners and the vibrant ramen dishes.</p>
                        <p>In addition to its strong branding, Menya Musashi's website features a user-friendly design that allows users to easily stay informed about the restaurant's latest news and updates. The news announcements are prominently displayed on the homepage in boxes located at the bottom of the page, eliminating the need for users to navigate to a separate news page. This streamlined approach enhances the user experience, making it more convenient for customers to stay up-to-date on Menya Musashi's latest offerings and promotions.</p>
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
                
                {/* ID5 */}
                <div className='details'
                onClick={(e) => {
                    e.preventDefault();
                    if (windowWidth.current <= 960) {
                        setTimeout(()=> {detail5.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                    } else {
                        console.log(windowWidth.current)
                    }
                }}>
                    <summary className="details_summary" onClick={handleClick("panel5")}>
                        <div className='summary_title'>Menya Musashi Hong Kong</div>
                        <div className='summary_type' ref={detail6}>UI/UX Design</div>
                    </summary>
                    
                    {expanded === "panel5" && (
                    <div 
                    className='details_wrapper'
                    // onClick={()=> console.log(detail2.current.scrollHeight)}
                    >
                    <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="" className="work-image"></img>
                    {/* {video &&
                    <video src={process.env.PUBLIC_URL + video} alt="" className="work-image" autoPlay muted loop />
                    } */}
                    <div className='details_content'>
                        <p className='content-highlight'>A Japanese Restaurants website design with CMS</p>
                        <p>Menya Musashi is a highly regarded Japanese restaurant that has gained a reputation for its exceptional ramen dishes. The restaurant's brand design incorporates a samurai theme that is reflected in the use of traditional Japanese ink-wash painting style. The predominant use of black in the design not only evokes a sense of sophistication and elegance but also helps to draw attention to the colorful promotional banners and the vibrant ramen dishes.</p>
                        <p>In addition to its strong branding, Menya Musashi's website features a user-friendly design that allows users to easily stay informed about the restaurant's latest news and updates. The news announcements are prominently displayed on the homepage in boxes located at the bottom of the page, eliminating the need for users to navigate to a separate news page. This streamlined approach enhances the user experience, making it more convenient for customers to stay up-to-date on Menya Musashi's latest offerings and promotions.</p>
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

                {/* ID6 */}
                <div className='details'
                onClick={(e) => {
                    e.preventDefault();
                    if (windowWidth.current <= 960) {
                        setTimeout(()=> {detail6.current.scrollIntoView({ block: "start", behavior: 'smooth' })}, 100)
                    } else {
                        console.log(windowWidth.current)
                    }
                }}>
                    <summary className="details_summary" onClick={handleClick("panel6")}>
                        <div className='summary_title'>Menya Musashi Hong Kong</div>
                        <div className='summary_type'>UI/UX Design</div>
                    </summary>
                    
                    {expanded === "panel6" && (
                    <div 
                    className='details_wrapper'
                    // onClick={()=> console.log(detail2.current.scrollHeight)}
                    >
                    <img src={process.env.PUBLIC_URL + "/images/menya.gif"} alt="" className="work-image"></img>
                    {/* {video &&
                    <video src={process.env.PUBLIC_URL + video} alt="" className="work-image" autoPlay muted loop />
                    } */}
                    <div className='details_content'>
                        <p className='content-highlight'>A Japanese Restaurants website design with CMS</p>
                        <p>Menya Musashi is a highly regarded Japanese restaurant that has gained a reputation for its exceptional ramen dishes. The restaurant's brand design incorporates a samurai theme that is reflected in the use of traditional Japanese ink-wash painting style. The predominant use of black in the design not only evokes a sense of sophistication and elegance but also helps to draw attention to the colorful promotional banners and the vibrant ramen dishes.</p>
                        <p>In addition to its strong branding, Menya Musashi's website features a user-friendly design that allows users to easily stay informed about the restaurant's latest news and updates. The news announcements are prominently displayed on the homepage in boxes located at the bottom of the page, eliminating the need for users to navigate to a separate news page. This streamlined approach enhances the user experience, making it more convenient for customers to stay up-to-date on Menya Musashi's latest offerings and promotions.</p>
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
            
            </section>
        </div>
        <div>image</div>
    </div> 
    </>
}

export default Works;