import React, { useState } from "react";
import Header from "./components/Header";
import Add from "./components/Add";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { ContextProvider } from "./context/Context";
import "./App.css";

function App() {
	const [results, setResults] = useState([]);

	const handleResults = (value) => {
		setResults(value);
	};

	const darkTheme = createMuiTheme({
		palette: {
			type: "dark",
		},
	});

	return (
		<>
			<ContextProvider>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Router>
						<Header passResults={handleResults} />
						<Switch>
							<Route exact path="/">
								<Watchlist />
							</Route>
							<Route path="/watched">
								<Watched />
							</Route>
							<Route path="/add">
								<Add results={results} />
							</Route>
						</Switch>
					</Router>
				</ThemeProvider>
			</ContextProvider>
		</>
	);
}

export default App;
