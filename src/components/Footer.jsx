import '../styles/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faInstagram,
    faGithub
} from "@fortawesome/free-brands-svg-icons";



function Footer() {
    return (
            <footer>
                <p>Cesar's Portfolio &copy;</p>
                <div className="social-container">
                <a href="https://www.instagram.com/cedafiso/" target="_blank"  rel="noreferrer"  className="social" alt="Instragram icon">
                    <FontAwesomeIcon icon={faInstagram} size="2x" alt="Instragram icon"/>
                    &nbsp;Instagram
                </a>
                <a href="https://twitter.com/Cfigsoc" target="_blank" rel="noreferrer"  className="social" alt="Twitter icon">
                    <FontAwesomeIcon icon={faTwitter} size="2x" alt="Twitter icon"/>
                    &nbsp;Twitter
                </a>
                <a href="https://github.com/cedafiso0403" rel="noreferrer"  target="_blank" alt="Github icon" className="social">
                    <FontAwesomeIcon icon={faGithub} size="2x" alt="Github icon"/>
                    &nbsp;Github
                </a>
                </div>

                
            </footer>
    );
}

export default Footer;