import githubIcon from '../images/github-mark.svg';
import arrow from '../images/arrow-right.svg';
import IPAddress from '../images/IPAddressTracker.png';


const Work = () => {
    return <>
    <div className="wrapper-work">
            <div className="work-upper">
                <h2 className="work-title">IP Address Tracker</h2>
                <div className='work-image-block'>
                    <div className="work-highlights">LATEST<br></br>WORK</div>
                    <img src={IPAddress} alt="IPAddress" className="work-image"></img>
                </div>
                <div className='work-tags'>
                    <div className='work-tag-box'><p className="work-tag">HTML</p></div>
                    <div className='work-tag-box'><p className="work-tag">SCSS</p></div>
                    <div className='work-tag-box'><p className="work-tag">Javascript</p></div>
                    <div className='work-tag-box'><p className="work-tag">API</p></div>
                </div>
        </div>
        <div className="work-lower">
            <a href="https://github.com/phoebeltc" target="_blank" className="button-work">
                <img src={githubIcon} alt="githubIcon" className="button-icon-work"></img>
            </a>
            <a href="https://bobbyhadz.com" target="_blank" className="button-work">
                <img src={arrow} alt="arrow" className="button-icon-work"></img>
            </a>
        </div>
    </div>
    
    </>
}

export default Work;