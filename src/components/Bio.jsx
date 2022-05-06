import Photo from "../images/Picture1.png";
import Emoji from "./Emoji";
import { BsStack } from "react-icons/bs";
import '../styles/home.css';


function Bio() {
    return (
        <section id="welcome-section">
            <div className='home-container'>
                <div className="photo-container">
                    <img alt="Cesar" src={Photo}></img>
                    <div id="photo-container-background">
                    </div>
                </div>
                <div className="bio-container">
                    <h1>Software developer in training</h1>
                    <p>I am a second year student of computer science at Langara College!</p>
                    <p>Let's work! &#62;</p>
                </div>
            </div>
            <div id="fullstack-box" className="box">
                <div> Full Stack Developer </div>
                <div><span><BsStack/></span></div>
            </div>
            <div id="hi-box" className="box">
                <div><Emoji symbol="👋" label="Waving hand"/></div>
                <div><span>Hi! I'm </span><br></br> Cesar</div>         
            </div>
            <div id="techguy-box" className="box">
                <div> Tech guy</div>         
                <div><Emoji symbol="👨‍💻" label="Waving hand"/></div>
            </div>
            <div id="line-black" className="line"></div>
        </section>
    );
}

export default Bio;