import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const DATA = [
    {
        name: "Kaisel Bot",
        src: "",
        description: "App for retrieving stats for League"
    },
    {
        name: "Transfullanos",
        src: "",
        description: "App for company"
    },
    {
        name: "Expensify App",
        src: "",
        description: "Keep track of expenses"
    }

]


function Projects() {
    return (
        <div>
            <Header />
            <main>
                <div className="project-container">
                    <h1>My Work</h1>
                    <p>These are some of the projects I have been working on during my studies, hope you like them!</p>
                </div>
                <div className="cards-container">
                    {
                        DATA.map((element) => {
                            return <ProjectCard key={element.name} {...element} />
                        })
                    }
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Projects;