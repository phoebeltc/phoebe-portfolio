import pig from '../images/pig.png';
import cooking from '../images/cooking.png';
import eye from '../images/eye.png';
import hongkong from '../images/hong_kong.png';
import passion from '../images/passion.png';
import patient from '../images/patient.png';

const Homepage = () => {
    return <>
    <div className="frame-homepage">
        <div className='image-homepage'>
            <img src={pig} alt="pig" className='pig-homepage'></img>
            <img src={cooking} alt="cooking" className='cooking-homepage'></img>
            <img src={eye} alt="eye" className='eye-homepage'></img>
            <img src={hongkong} alt="hongkong" className='hongkong-homepage'></img>
            <img src={passion} alt="passion" className='passion-homepage'></img>
            <img src={patient} alt="patient" className='patient-homepage'></img>
        </div>
        <div>
            <h1>HI.</h1>
            <h1>I AM PHOEBE LEUNG.</h1>
            <h1>FRONT END</h1>
            <h1>DEVELOPER &amp; DESIGNER </h1>
            <h1 className="space-homepage">BASED         in LONDON.</h1>
        </div>
        <div className="footer-homepage">
            <p>WELCOME TO My Portfolio Website.</p>
            <p className="scroll">SCROLL</p>
        </div>
    </div> 
    </>
}

export default Homepage;

