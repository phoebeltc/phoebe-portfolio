import Work from '../components/Work'
import { useState } from 'react';

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

const Works = () => {

    const [isOpen, setIsOpen] = useState(false);

    return <>
    <div className="frame-works">
        {/* {works.map((
            {title, image, latestWork, skills, github, link}, index
        ) => {
            return (
                <Work
                    title={title}
                    image={image}
                    latestWork={latestWork}
                    skills={skills}
                    github={github}
                    link={link}
                    key={index}
                />
            )
        })

        } */}

        <div className='wrapper-work'>
            <section className="details-group">
                {works.map((
                    {id, title, category, gif, video, highlight, content1, content2, github, link}
                ) => {
                    return (
                <Work 
                    title={title}
                    category={category}
                    gif={gif}
                    video={video}
                    highlight={highlight}
                    content1={content1}
                    content2={content2}
                    github={github}
                    link={link}
                    key={id}
                />
                )}
                
                )}
            </section>
        </div>
        <div>image</div>
    </div> 
    </>
}

export default Works;