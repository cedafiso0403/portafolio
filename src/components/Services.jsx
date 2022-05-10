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
                        <p>Extensive knowledge in HTML/CSS and JavaScript along with modern frameworks such as React.js and Sass. Currently learning flutter!  🤓</p>
                    </div>
                    <div className='box-container backend'>
                        <h4><DiNodejsSmall className='node-symbol' /> Back-End Skills</h4>
                        <p>Skilled use of Node.js and Express for building the back-end for web applications.</p>
                    </div>
                    <div className='box-container database'>
                        <h4><DiMongodb className='database-symbol' />Database Management</h4>
                        <p>Experienced in building and manipulating non-relational databases using MongoDB.</p>
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