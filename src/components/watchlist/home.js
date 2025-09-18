import { useEffect, useState } from 'react';
import MovieCard from "../movieCard/movieCard.js";
import "./watchlist.css"
import { useSelector } from "react-redux";

function WatchList() {
    const moviesList = useSelector((state)=>state.heartReducer.movies)
    // console.log({heart})
    const [movies, setMovies] = useState([])
    
    useEffect(() => {
        setMovies(moviesList)
    }, [moviesList]);

    return (
        <>
            <div className="movie-container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        backdrop_path={movie.backdrop_path}
                        original_title={movie.original_title}
                        overview={movie.overview}
                        release_date={movie.release_date}
                        vote_average={movie.vote_average}
                        id = {movie.id}
                    />
                ))}
            </div>
        </>
    )
}

export default WatchList