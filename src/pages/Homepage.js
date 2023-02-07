import pig from '../images/pig.png'

const Homepage = () => {
    return <>
    <div className="frame-homepage">
        <div className='image-homepage'>
            <img src={pig} alt="Pig" className='pig-homepage'></img>
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

