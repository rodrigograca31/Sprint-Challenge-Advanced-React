import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Players from "./components/players";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
	const [darkMode, setDarkMode] = useDarkMode(false);

	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};

	return (
		<div className="App">
			<button onClick={toggleMode}>Dark mode</button>
			<Players></Players>
		</div>
	);
}

export default App;
