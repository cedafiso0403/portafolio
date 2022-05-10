import { Link } from "react-router-dom";
import '../styles/header.css';
import logo from "../images/logo_transparent_background.webp";



function Header() {
    return (
        <header>
            <div id="background-header"></div>
            <Link to="/" className="logo"><img alt="Personal Logo" src={logo} height="54px"></img></Link>
            <nav>
                <ul>
                    <li><a href="#welcome-section">Home</a></li>
                    <li><a href="#services-section">Skills</a></li>
                    <li><a href="#projects-section">Projects</a></li>
                    <li><a href="#aboutme-section">About me</a></li>
                    {/* <li><Link to="/Contact" className="contact-button">Contact</Link></li> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;