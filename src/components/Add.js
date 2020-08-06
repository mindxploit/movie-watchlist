import React from "react";
import ResultCard from "./ResultCard";
import { Grid } from "@material-ui/core";

const Add = ({ results }) => {
	const movies = results.map((movie) => (
		<Grid item key={movie.id}>
			<ResultCard
				movie={movie}
				title={movie.title}
				poster={movie.poster_path}
				description={movie.overview}
				rating={movie.vote_average}
				releaseDate={movie.release_date}
				type="add"
			/>
		</Grid>
	));

	return (
		<div style={{ padding: 20 }}>
			<Grid style={{ marginTop: 20 }} container justify="center" spacing={3}>
				{movies}
			</Grid>
		</div>
	);
};

export default Add;
