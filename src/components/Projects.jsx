import '../styles/home.css';


function Projects() {
    return (
        <section id="aboutme-section">
            <div id="line-yellow" className="line"></div>
            <h2>My projects</h2>
            <h3>Projects I have worked or currently working</h3>
            <div id="project-container">
                <a herf="#"><div className='project-card-kaisel'></div></a>
                <a herf="#"><div className='project-card-transfullanos'></div></a>
                <a href="#"><div className='project-card-expensify'></div></a>
            </div>
        </section>
    );
}

export default Projects;