import React, { useContext } from "react";
import { IconButton } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import CheckIcon from "@material-ui/icons/Check";
import { Context } from "../context/Context";

const MovieControls = ({ type, movie }) => {
	const { removeFromWatchList, addToWatched, watchList, addToWatchList, watched } = useContext(
		Context
	);

	let storedMovie = watchList.find((o) => o.id === movie.id);
	let watchedMovie = watched.find((o) => o.id === movie.id);
	const isDisabled = storedMovie || watchedMovie ? true : false;

	return (
		<>
			{type === "watchlist" ? (
				<>
					<IconButton onClick={() => removeFromWatchList(movie.id)}>
						<RemoveIcon />
					</IconButton>
					<IconButton onClick={() => addToWatched(movie)}>
						<CheckIcon />
					</IconButton>
				</>
			) : null}

			{type === "add" ? (
				<IconButton onClick={() => addToWatchList(movie)} disabled={isDisabled}>
					<AddIcon />
				</IconButton>
			) : null}
		</>
	);
};

export default MovieControls;
