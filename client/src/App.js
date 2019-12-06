import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Players from "./components/players";
import { useDarkMode } from "./hooks/useDarkMode";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function App() {
	const [darkMode, setDarkMode] = useDarkMode(false);

	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};

	return (
		<div className="App">
			<Button onClick={toggleMode} variant="contained" color="secondary">
				Join the dark side!
			</Button>
			<br />
			<br />
			<Grid container spacing={3}>
				<Players></Players>
			</Grid>
		</div>
	);
}

export default App;
