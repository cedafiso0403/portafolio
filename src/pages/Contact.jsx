import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import '../styles/contactpage.css';


function Contact() {
    return (
        <div>
            <Header />
            <main>
                <div className="contactpage-container">
                    <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
                </div>
                <div className="contactpage-container">
                    <ContactForm />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;