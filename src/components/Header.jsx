import { Link } from "react-router-dom";
import '../styles/header.css';


function Header() {
    return (
        <div>
            <header>
                <img alt="Personal Logo" src="/images/logo_transparent_background.png"></img>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Resume">Resume</Link></li>
                        <li><Link to="/Contact" className="contact-button">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;