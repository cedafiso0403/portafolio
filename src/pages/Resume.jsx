import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import ResumeFile from '../resources/Resume.pdf'
import '../styles/home.css';

function Resume() {

    const [section, setSection] = useState('done');

    useEffect(() => {
        openSection();
    }, [section])

    let openSection = () => {
        let sections = document.getElementsByClassName("content-section");
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.display = "none";
        }
        let selectSection = document.getElementById(section);
        selectSection.style.display = "block";
    }

    let buttonHandler = (e, value) => {
        setSection(value);
        let sections = document.getElementsByClassName("tablinks");
        for (let i = 0; i < sections.length; i++) {
            sections[i].className = "tablinks";
        }
        e.currentTarget.className += " active"

    }

    return (
        <>
            <Header />
            <main id="resume">
                <h2>Resume</h2>
                <div id="resume-main">
                    <div className='tab-section'>
                        <button className="tablinks active" onClick={e => buttonHandler(e, "done")}>What I have done?</button>
                        <button className="tablinks" onClick={e => buttonHandler(e, "work")}>My work experience</button>
                        <button className="tablinks" onClick={e => buttonHandler(e, "academic")}>My academic background</button>
                        <button className="tablinks" onClick={e => buttonHandler(e, "skills")}>Skills</button>
                    </div>
                    <div></div>
                    <div className='content'>
                        <div id="done" className="content-section">
                            <p>Hey! My name is Cesar and I am currently a computer science student at Langara College, I have a strong academic background as I hold a bachelor's degree in mechanical engineering and a graduate degree in project management. I decided to embark on the path of computer science after having discovered it while working as a mechanical engineer, during this new path I have only found joy in this field and for which I have developed nothing but love.</p>
                        </div>
                        <div id="work" className="content-section">
                            <ul>
                                <li>
                                    <span>
                                        General Maintenance Scheduler Assistant <br></br>
                                        <b>Gracetales LTDA.</b>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Mechanical Engineering Intern in the maintenance <br></br>
                                        <b>Gracetales LTDA.</b>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Research Intern <br></br>
                                        <b>University of the North</b>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div id="academic" className="content-section">
                            <ul>
                                <li>
                                    <span>
                                        Diploma of Computer Studies <br></br>
                                        <b>Langara College</b>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Post Degree of Project Management <br></br>
                                        <b>Colombian School of Engineering Julio Garavito</b>
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        Bachelor of Mechanical Engineering <br></br>
                                        <b>University of the North</b>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div id="skills" className="content-section">
                            <ul>
                                <li>React <br></br>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h3>Do you want to check my resume in detail? <a href={ResumeFile}>Go for it</a></h3>
            </main>
            <Footer />
        </>
    );
}

export default Resume;