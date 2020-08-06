import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Grid } from "@material-ui/core";
import ResultCard from "./ResultCard";

const Watched = () => {
	const { watched } = useContext(Context);

	const watchedCard = watched.map((movie) => (
		<Grid item key={movie.id}>
			<ResultCard
				type="watched"
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
				{watchedCard}
			</Grid>
		</div>
	);
};

export default Watched;
