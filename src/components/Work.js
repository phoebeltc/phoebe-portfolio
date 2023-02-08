import githubIcon from '../images/github-mark.svg';
import arrow from '../images/arrow-right.svg';
import IPAddress from '../images/IPAddressTracker.png';


const Work = () => {
    return <>
    <div className="wrapper-work">
        <div className="work-upper">
            <div></div>
            <h2>IP Address Tracker</h2>
            <div>
                <img src={IPAddress} alt="IPAddress" className="work-image"></img>
            </div>
            <div>
                <p className="work-tag">HTML</p>
            </div>
        </div>
        <div className="work-lower">
            <a href="https://github.com/phoebeltc" target="_blank" className="button-work">
                <img src={githubIcon} alt="githubIcon" width="38" height="38"></img>
            </a>
            <a href="https://bobbyhadz.com" target="_blank" className="button-work">
                <img src={arrow} alt="arrow" width="38" height="38"></img>
            </a>
        </div>
    </div>
    </>
}

export default Work;