import Header from '../components/Header';
import Footer from '../components/Footer';
import ResumeFile from '../resources/Resume.pdf'
import '../styles/home.css';

function Resume() {
    return (
        <div>
            <Header />
            <main>
                <div className="resume-container">
                    <div className="description-resume">
                        <h1>What I have done?</h1>
                        <p>Hey! My name is Cesar and I am currently a computer science student at Langara College, I have a strong academic background as I hold a bachelor's degree in mechanical engineering and a graduate degree in project management. I decided to embark on the path of computer science after having discovered it while working as a mechanical engineer, during this new path I have only found joy in this field and for which I have developed nothing but love.</p>
                    </div>
                    <div className="background-container">
                        <div>
                            <h2>My work experience</h2>
                            <ul>
                                <li>General Maintenance Scheduler Assistant<br></br> <b>Gracetales LTDA.</b> </li>
                                <li>Mechanical Engineering Intern in the maintenance <br></br> <b>Gracetales LTDA.</b></li>
                                <li>Research Intern<br></br> <b>University of the North</b></li>
                            </ul>
                        </div>
                        <div>
                            <h2>My academic background</h2>
                            <ul>
                                <li>Diploma of Computer Studies <br></br> <b>Langara College</b></li>
                                <li>Post Degree of Project Management<br></br> <b>Colombian School of Engineering Julio Garavito</b></li>
                                <li>Bachelor of Mechanical Engineering <br></br> <b>University of the North</b></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h2>Skills</h2>
                        <ul className="skill-list">
                            <li>Git</li>
                            <li>MongoDB</li>
                            <li>React</li>
                            <li>Node.JS</li>
                            <li>Express</li>
                            <li>AWS CLoud9</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <h3>Want to check my resume in detail? Feel free to do it!</h3>
                    <a href={ResumeFile} 
                    target="_blank"
                    rel="noreferrer" className="resume-button">Resume</a>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Resume;