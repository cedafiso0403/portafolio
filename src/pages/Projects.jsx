import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const DATA = {
    name: "Kaisel Bot",
    src: "",
    description: "App for retrieving stats for League"

}


function Projects() {
    return (
        <div>
            <Header />
            <main>
                <div className="cards-container">
                    <ProjectCard {...DATA} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Projects;