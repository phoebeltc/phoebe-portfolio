import pig from '../images/pig.png';
import speech from '../images/speech.png'

const Contact = () => {
    return <>
    <div className="frame-contact">
            <div className="email-contact">
                <a href="mailto:phoebeleungtc@gmail.com" className="email-text-contact">SEND ME A MESSAGE !</a>
                <div className="speech-contact">
                    <img src={speech} alt="speech" className="speech-img1-contact"></img>
                    <img src={speech} alt="speech" className="speech-img2-contact"></img>
                </div>
                <div className="pig-contact">
                    <img src={pig} alt="pig" className="pig-img1-contact"></img>
                    <img src={pig} alt="pig" className="pig-img2-contact"></img>
                    <img src={pig} alt="pig" className="pig-img3-contact"></img>
                </div>
            </div>
        
            <div className="footer-contact">
                <div className="socialmedia-contact">
                    <a href="https://www.instagram.com/phoebeltc/" target="_blank" className="smlink-contact">Instagram</a>
                    <a href="https://github.com/phoebeltc" target="_blank" className="smlink-contact">GitHub</a>
                    <a href="https://www.linkedin.com/in/tsz-ching-leung-6b8972bb/" target="_blank" className="smlink-contact">Linkedin</a>
                    <a target="_blank" className="smlink-contact">CV</a>
                </div>
                <div>
                    <p>@Phoebe Leung 2023</p>
                </div>
            </div>
        </div>
    </>
}

export default Contact;