import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.css';


function Home() {
    return (
        <div>
            <Header />
            <main>
                <div className="bio-container">
                    <h1>Software developer in training</h1>
                    <p>I am a first year student of computer science at langara college, I am passionate about software development and especially web development. If you want to know more about my background let check my resume!</p>
                </div>
                <div className="photo-container">
                    <img alt="Photo of Cesar" src="\images\Photo-of-me.jpg"></img>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Home;