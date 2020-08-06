import React, { useContext } from "react";
import { Context, ContextProvider } from "../context/Context";
import { Grid, Typography } from "@material-ui/core";
import ResultCard from "./ResultCard";

const Watchlist = () => {
	const { watchList } = useContext(Context);

	const watchlistCard = watchList.map((movie) => (
		<Grid item key={movie.id}>
			<ResultCard
				type="watchlist"
				movie={movie}
				title={movie.title}
				poster={movie.poster_path}
				description={movie.overview}
				rating={movie.vote_average}
				releaseDate={movie.release_date}
			/>
		</Grid>
	));

	return (
		<div style={{ padding: 20 }}>
			<Grid style={{ marginTop: 20 }} container justify="center" spacing={3}>
				{watchList.length > 0 ? (
					watchlistCard
				) : (
					<Typography variant="h4">It looks empty here... Search for a movie!</Typography>
				)}
			</Grid>
		</div>
	);
};

export default Watchlist;
