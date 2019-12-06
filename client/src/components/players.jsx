import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class Players extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			players: []
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:5000/api/players")
			.then(({ data }) => {
				// console.log(data);

				this.setState(st => ({
					players: data
				}));
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<>
				<h1>Players: </h1>
				<Grid container spacing={3}>
					{this.state.players.map(player => {
						// return (
						// 	<>
						// 		<b>Name: </b>
						// 		{player.name}
						// 		<br />
						// 		<b>Country: </b>
						// 		{player.country}
						// 		<br />
						// 		<b>Searches: </b>
						// 		{player.searches}
						// 		<br />
						// 		<br />
						// 	</>
						// );
						return (
							<Grid item xs={3}>
								<Card>
									<CardContent>
										<Typography
											variant="body2"
											component="p"
										>
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
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</>
		);
	}
}

export default Players;
