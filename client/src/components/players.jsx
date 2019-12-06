import React from "react";
import axios from "axios";

class Players extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players: []
		};
	}

	componentDidMount() {
		axios.get("http://localhost:5000/api/players").then(({ data }) => {
			console.log(data);

			this.setState(st => ({
				players: data
			}));
		});
	}

	render() {
		return (
			<div>
				{this.state.players.map(player => {
					return (
						<>
							<b>Name: </b>
							{player.name}
							<br />
							<b>Country: </b>
							{player.country}
							<br />
							<b>Searches: </b>
							{player.searches}
							<br />
							<br />
						</>
					);
				})}
			</div>
		);
	}
}

export default Players;
