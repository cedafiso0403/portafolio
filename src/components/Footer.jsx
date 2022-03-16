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
                <div>
                <a href="https://www.instagram.com/cedafiso/" target="_blank" className="instragram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://twitter.com/Cfigsoc" target="_blank" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://github.com/cedafiso0403" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                </div>

                
            </footer>
    );
}

export default Footer;