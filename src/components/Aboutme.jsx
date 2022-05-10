import '../styles/home.css';
import Photo from "../images/Picture3.png";
import Resume from "../resources/Resume.pdf";


function Aboutme() {
    return (
        <section id="aboutme-section">
            <div id="line-white2" className="line"></div>
            <h2>About me</h2>
            <h3>A little about Cesar</h3>
            <div id="aboutme-container">
                <div id="boxes-container">
                    <div id="education-box">
                        <h4>Education</h4>
                        <p>Undergraduate in mechanical engineering, postgraduate in project management and currently a student of computer science</p>
                    </div>
                    <div id="work-box">
                        <h4>Work experience</h4>
                        <p>Maintenance engineer and research assistant, extremely curious and passionate about learning</p>
                    </div>
                    <div id="hobbys-box">
                        <h4>Games &amp; Music</h4>
                        <p>
                        I love playing video games in my free time while listening to my favorite music! 👾
                        </p>
                    </div>
                    <div id="goals-box">
                        <h4>Goals</h4>
                        <p>I have discovered my passion for software development, so my current goal is to become a senior developer.</p>
                    </div>
                </div>
                <div id="img-container">
                <img alt="Cesar fist bump" src={Photo}></img>
                </div>
            </div>
            <h4 id='message1'>Creative. Dedicated. Responsible.</h4>
            <h4 id='message2'>Do you want to know more? <a href={Resume}>Check my resume</a></h4>

        </section>
    );
}

export default Aboutme;