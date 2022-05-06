import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Kaisel from '../images/Kaisel2.png';
import Transfullanos from '../images/Transfullanos.png';
import Expensify from '../images/Expensify-app.png'
import { Link } from "react-router-dom";


const DATA = [
    {
        name: "Kaisel Bot",
        src: Kaisel,
        description: "Cool app for getting you ranked stats in League of Legends or Valorant!",
        refTo: "https://github.com/cedafiso0403/frontend-kaisel-bot"
    },
    {
        name: "Transfullanos",
        src: Transfullanos,
        description: "A model page for a company that needs a website where clients can log in and handle their orders!",
        refTo: "https://github.com/cedafiso0403/transfullanos"
    },
    {
        name: "Expensify App",
        src: Expensify,
        description: "An awesome app with authentication that will help you to keep track of your expenses!",
        refTo: "https://expensify-app-react-cedafiso.herokuapp.com/"
    }

]


function Projects() {
    return (
        <>
            <Header />
            <main>
                <div className="project-container">
                    <h1>My Work</h1>
                    <p>These are some of the projects I have been working on during my studies, hope you like them!</p>
                </div>
                <div className="cards-container">
                    {
                        DATA.map((element) => {
                            return <a href={element.refTo} target="_blank"  key={element.name} className="project-card-link"><ProjectCard key={element.name} {...element} /></a>
                        })
                    }
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Projects;