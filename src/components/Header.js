import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import TheatersIcon from "@material-ui/icons/Theaters";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		background: "#333",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	movieIcon: {
		marginRight: 5,
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
	buttonLinks: {
		flexGrow: 1,
	},
	link: {
		textDecoration: "none",
		color: "white",
	},
}));

export default function Header({ passResults }) {
	const classes = useStyles();
	const [query, setQuery] = useState();

	const api_call_search = async () => {
		try {
			const API_KEY = "6e103e1edcb88eabdc434b75e2c174b6";
			const apiCall = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
			const request = axios.get(apiCall);
			const response = await request;
			passResults(response.data.results);
		} catch (e) {
			passResults([]);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
		api_call_search();
	};

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position="static">
				<Toolbar>
					<Link to="/" className={classes.link}>
						<TheatersIcon className={classes.movieIcon} />
					</Link>
					<Typography className={classes.title} variant="h6" noWrap>
						Movie Watchlist
					</Typography>
					<div className={classes.buttonLinks}>
						<Link to="/" className={classes.link}>
							<Button color="inherit">Watchlist</Button>
						</Link>
						<Link to="/watched" className={classes.link}>
							<Button color="inherit">Watched</Button>
						</Link>
					</div>
					<Link to="/add" className={classes.link}>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								value={query}
								onChange={handleChange}
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ "aria-label": "search" }}
							/>
						</div>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}
