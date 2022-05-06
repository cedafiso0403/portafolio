import Header from '../components/Header';
import Footer from '../components/Footer';
import Bio from '../components/Bio';
import Services from '../components/Services';
import Projects from '../components/Projects';
import '../styles/home.css';


function Home() {
    return (
        <>
            <Header />
            <Bio />
            <Services />
            <Projects />
            <Footer />
        </>
    );
}

export default Home;