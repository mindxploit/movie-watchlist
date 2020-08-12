import React, { useContext } from "react";
import {
	Card,
	CardActionArea,
	Typography,
	CardContent,
	CardMedia,
	CardActions,
	makeStyles,
	Button,
	IconButton,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import { Context } from "../context/Context";
import MovieControls from "./MovieControls";

const useStyles = makeStyles({
	root: {
		width: 250,
	},
	media: {
		height: 400,
	},
});

const ResultCard = ({ movie, title, poster, description, rating, releaseDate, type }) => {
	const classes = useStyles();
	const { addToWatchList, watchList } = useContext(Context);

	return (
		<>
			<Card className={classes.root}>
				<CardActionArea>
					{poster && (
						<CardMedia
							className={classes.media}
							image={`https://image.tmdb.org/t/p/w400${poster}`}
							title={`${title} poster`}
						/>
					)}
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{releaseDate && releaseDate.substring(0, 4)}
						</Typography>
						{rating > 0 && (
							<Typography variant="h3">
								<StarIcon />
								{rating}
							</Typography>
						)}
						<Typography variant="body2" color="textSecondary" component="p">
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<MovieControls type={type} movie={movie} />
					<Button size="small" color="secondary">
						<a
							style={{ textDecoration: "none", color: "inherit" }}
							href={`https://www.imdb.com/find?q=${title}`}
							target="_blank"
						>
							Info
						</a>
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default ResultCard;
