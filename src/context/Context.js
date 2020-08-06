import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
	let watchStorage = localStorage.getItem("watchlist")
		? JSON.parse(localStorage.getItem("watchlist"))
		: [];
	const [watchList, setWatchList] = useState(watchStorage);

	let watchedStorage = localStorage.getItem("watched")
		? JSON.parse(localStorage.getItem("watched"))
		: [];
	const [watched, setWatched] = useState(watchedStorage);

	useEffect(() => {
		localStorage.setItem("watchlist", JSON.stringify(watchList));
	}, [watchList]);

	useEffect(() => {
		localStorage.setItem("watched", JSON.stringify(watched));
	}, [watched]);

	// actions
	const addToWatchList = (movie) => {
		setWatchList([...watchList, movie]);
	};

	const removeFromWatchList = (id) => {
		let newList = watchList.filter((movie) => movie.id !== id);
		setWatchList(newList);
	};

	const addToWatched = (movie) => {
		setWatched([...watched, movie]);
		removeFromWatchList(movie.id);
	};

	return (
		<Context.Provider
			value={{
				addToWatchList,
				removeFromWatchList,
				addToWatched,
				watchList: watchList,
				watched: watched,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
