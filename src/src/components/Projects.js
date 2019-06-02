import React from 'react';
import PROJECTS from "../data/projects";



const Projects = () =>  {
        return (
        <div>
            <h2> Highlighted Projects</h2>
            <div>
                {
                    PROJECTS.map((PROJECT) => <Project key={PROJECT.id} project={PROJECT} />)
                }
            </div>
        </div>
        )
}

const Project = props => {

    const style = {
        textDecoration: "none",
        backgroundColor: "#5b86e5", 
        padding: 8, 
        color: "white",
        borderRadius: 2
}
    
    const {title, image, description, link} = props.project

    return (
    <div style={{ display: "inline-block", width: 400, margin: 10 }}> 
        <h3>{title}</h3>
        <img src={image} alt="profile" style={{ width: 200, height: 120 }}  href={link} />
        <p>{description}</p>
        <a href={link} style={style}>CLICK ME</a>
        
    </div>
    )
}
export default Projects;