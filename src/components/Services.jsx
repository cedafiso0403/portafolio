import '../styles/home.css';
import Photo from "../images/Picture2.png";
import { FaCode } from "react-icons/fa";
import { DiJavascript1, DiGithubBadge, DiNodejs, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";


function Services() {
    return (
        <section id="services-section">
            <div id="line-yellow" className="line"></div>
            <div id="line-yellow-horizontal" className="line-horizontal"></div>
            <div id="line-yellow2" className="line2"></div>
            <div id="container-skills">
                <div id="container-image-skills">
                    <h2>My skills</h2>
                    <h3>A developer passionate about technology.</h3>
                    <img alt="Cesar fist bump" src={Photo}></img>
                    <DiJavascript1 id="javascript" />
                    <DiGithubBadge id="github" />
                    <FaCode id="code" />
                    <DiNodejs id="nodejs" />
                </div>
                <div id="container-skills-boxes">
                    <div className='box-container frontend'>
                        <h4><DiReact className='react-symbol' /> Front-End Skills</h4>
                        <p></p>
                    </div>
                    <div className='box-container backend'>
                        <h4><DiNodejsSmall className='node-symbol' /> Back-End Skills</h4>
                        <p></p>
                    </div>
                    <div className='box-container database'>
                        <h4><DiMongodb className='database-symbol' />Database Management</h4>
                        <p></p>
                    </div>
                </div>
            </div>
            <div id="line-purple" className="line"></div>
            <div id="line-purple-horizontal" className="line-horizontal-purple"></div>
            <div id="line-purple2" className="line"></div>
        </section>
    );
}

export default Services;