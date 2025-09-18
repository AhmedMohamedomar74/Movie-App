import PaginationComponent from "../pagination/pagination.js"
import { useEffect, useState } from 'react';
import MovieCard from "../movieCard/movieCard.js";
import "./home.css"
import { useDispatch, useSelector } from "react-redux";
import getMovise from "../../Redux/Actions/moviesAction.js";

function Home() {
    const moviesDispatch = useDispatch()
    const [activePage, setActivePage] = useState(1);
    const movies = useSelector((state) => state.MoviesReducer.list)

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    useEffect(() => {
        moviesDispatch(getMovise(activePage))
        console.log({ movies, activePage })

    }, [activePage])

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
                        id={movie.id}
                    />
                ))}
            </div>
            <PaginationComponent
                totalPages={15}
                activePage={activePage}
                onPageChange={handlePageChange}
                size="md"
            />
        </>
    )
}

export default Home