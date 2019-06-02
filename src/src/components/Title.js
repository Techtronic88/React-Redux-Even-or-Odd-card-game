import React, {Component} from 'react';

const TITLES = [
    "a software engineer / app developer",
    "an enthusiastic and keen learner",
    "always up for new challenges"
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true};
componentDidMount() {
this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000)
this.animateTitles()    
}


componentWillUnmount() {
clearInterval(this.indexInterval)
clearTimeout(this.timeout)
}

animateTitles = () => {
    this.indexInterval = setInterval(() => {
       const titleIndex = (this.state.titleIndex + 1) % TITLES.length
            this.setState({titleIndex: titleIndex, fadeIn: true});
            this.timeout = setTimeout(() => this.setState({fadeIn: false}), 2000);
        
    }, 4000);
}

    render () {
        const {titleIndex, fadeIn} = this.state;
        const title = TITLES[titleIndex];
        return (
            <p className={ fadeIn ? "title-fade-in" : "title-fade-out"}>I am {title}</p>
        )
    }
}

export default Title