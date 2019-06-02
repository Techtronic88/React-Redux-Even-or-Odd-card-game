import React, { Component } from 'react';


class Jokes extends Component { 
    state = { joke:{}, moreJokes: [] };

    componentDidMount() {
        fetch ("https://official-joke-api.appspot.com/random_joke")
                .then(response =>  response.json())
                .then(json => this.setState({joke: json}))
                .catch(error => alert(error.message));
    }

    getJokes = () => {
        fetch ("https://official-joke-api.appspot.com/random_ten")
                .then(response =>  response.json())
                .then(json => this.setState({moreJokes: json})) 
                .catch(error => alert(error.message));
    }

    render() {
        return (
        <div> 
            <h2>Highlighted Joke</h2>
            <Joke joke={this.state.joke} />
            <hr />
            <h3> Would you like 10 new Jokes ?</h3>
            <button onClick={this.getJokes}>Click me</button>
            {this.state.moreJokes.map(joke => <Joke key={joke.id} joke={joke}/>)}
        </div>
        )
    }
}


const Joke = ({joke:{setup, punchline} }) => 
<p style={{margin: 20}}>{setup}<em>{punchline}</em></p>



export default Jokes;
