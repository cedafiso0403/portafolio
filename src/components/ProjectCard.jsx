import React from 'react';
import '../styles/projectcard.css';


class ProjectCard extends React.Component{
    render(){
        return (
            <div className="project-card">
                <h1>{this.props.name}</h1>
                <img alt={'preview of'+ this.props.name} src={this.props.src}></img>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default ProjectCard;