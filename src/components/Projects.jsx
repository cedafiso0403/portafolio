import '../styles/home.css';


function Projects() {
    return (
        <section id="projects-section">
            <div id="line-purple3" className="line"></div>
            <h2>My projects</h2>
            <h3>Projects I have worked or currently working</h3>
            <h4>(Including this website of course)</h4>
            <div id="project-container">
                <a href="https://cedafiso0403.github.io/frontend-kaisel-bot/"  id="box1" target="_blank" rel="noreferrer" ><div className='project-card-kaisel'></div></a>
                <a href="https://transfullanos.herokuapp.com/" target="_blank" id="box2" rel="noreferrer" ><div className='project-card-transfullanos'></div></a>
                <a href="https://expensify-app-react-cedafiso.herokuapp.com/" id="box3" target="_blank" rel="noreferrer" ><div className='project-card-expensify'></div></a>
            </div>
            <h4 id='source-code'>Do you want to check the source code?</h4>
            <h4 id='github-link'><a href="https://github.com/cedafiso0403">Check my Github</a></h4>
            <div id="line-white" className="line"></div>
        </section>
    );
}

export default Projects;