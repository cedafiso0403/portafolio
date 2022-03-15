import { Link } from "react-router-dom";
import '../styles/header.css';
import logo from "../images/logo_transparent_background.png";



function Header() {
    return (
        <div>
            <header>
                <Link to="/" className="logo"><img alt="Personal Logo" src={logo}></img></Link>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Resume">Resume</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/Contact" className="contact-button">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;