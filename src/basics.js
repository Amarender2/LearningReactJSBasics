import React, { Component } from 'react';
import axios from 'axios';

const Card = (props) => {
	return (
		<div style={{ margin: '1em' }}>
			<img width="150" src={props.avatar_url} />
			<div style={{ display: 'inline-block', marginLeft: 10 }}>
				<div style={{ fontWeight: 'bold' }}>{props.name}</div>
				<div>{props.company}</div>
			</div>
		</div>
	);
};

let data = [
	{
		name: "Amar",
		avatar_url: "https://avatars0.githubusercontent.com/u/18291509?v=4",
		company: "Tempus"
	},
	{
		name: "Amar",
		avatar_url: "https://avatars0.githubusercontent.com/u/18291509?v=4",
		company: "Tempus2"
	}
];

const CardList = (props) => {
	return (

		//   		<Card name="Amar" avatar_url="https://avatars0.githubusercontent.com/u/18291509?v=4" // company="Tempus"/> 
		<div>
			{props.cards.map(card => <Card {...card} />)}
		</div>
	);
};


class Form extends React.Component {
	state = {
		userName: ''
	}
	handleSubmit = (event) => {
		event.preventDefault();
		console.log('Submitted ' + this.state.userName);
		axios.get('https://api.github.com/users/' + this.state.userName).then(resp => {
			this.props.onSubmit(resp.data);
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text"
					value={this.state.userName}
					onChange={(event) => this.setState({ userName: event.target.value })}
					placeHolder="Github Username" required />
				<button type="submit">Add Name</button>
			</form>
		);
	}
}

class App extends React.Component {
	state = {
		cards: [
			// {name:"Amar",
			// avatar_url:"https://avatars0.githubusercontent.com/u/18291509?v=4",
			// company:"Tempus"},
			// {name:"Amar",
			// avatar_url:"https://avatars0.githubusercontent.com/u/18291509?v=4",
			// company:"Tempus2"}
		]
	}

	addNewCard = (cardInfo) => {
		console.log('Adding New Card');
		this.setState(prevState => ({
			cards: prevState.cards.concat(cardInfo)
		}));
	}
	render() {
		return (
			<div>
				<Form onSubmit={this.addNewCard} />
				<CardList cards={this.state.cards} />
			</div>
		);
	}
}

// ReactDOM.render(<App />, document.getElementById('mountNode') );

export default App;