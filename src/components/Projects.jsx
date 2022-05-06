import '../styles/home.css';


function Projects() {
    return (
        <section id="aboutme-section">
            <div id="line-yellow" className="line"></div>
            <h2>My projects</h2>
            <h3>Projects I have worked or currently working</h3>
            <h4>(Including this website of course)</h4>
            <div id="project-container">
                <a herf="#"><div className='project-card-kaisel'></div></a>
                <a herf="#"><div className='project-card-transfullanos'></div></a>
                <a href="#"><div className='project-card-expensify'></div></a>
            </div>
            <h4 id='source-code'>Do you want to check the source code?</h4>
            <h4 id='github-link'><a href="#">Check my Github</a></h4>
        </section>
    );
}

export default Projects;