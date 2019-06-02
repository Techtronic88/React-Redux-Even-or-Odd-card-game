import React, { Component } from 'react';
import Projects from "./Projects";
import SocialProfiles from './SocialProfiles';
import profilePic from "../assets/profilePic.jpg"
import Title from "./Title";
import "../index.css"

class App extends Component {
    state = {displayBio: false}
    

    toggleRender = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

    render() {
        return (
            <div> 
                <img src={profilePic} alt="profile" className="profile" />
                <h1> Hello there, I am Tom </h1>
                {this.state.displayBio ? <Title /> : null}
                {
                    this.state.displayBio ?  (
                             <div>
                                 
                                 <p> My current tech stack: HTML/CSS/Javascript/React-Redux-React Hooks.</p>
                                 <p> I am always interested in contributing to useful projects</p>
                                 <p> Great Design + Coding + Product Management = Magic</p>
                                 <button onClick={this.toggleRender}> Show Less</button>
                             </div>
                         ): (
                             <div>
                             <button onClick={this.toggleRender}>Read More</button> 
                             </div>
                         )
                    }
                <hr />
                <Projects />  
                <hr />
                <h1>Connect with me</h1>
                <SocialProfiles /> 
            </div>
        )
    }
}

export default App

