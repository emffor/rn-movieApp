import { useEffect, useState } from "react"
import { Movie, MoviesNowPlayingDTO } from "../dtos/MoviesNowPlayingDTO";
import api from "../services/api";


export function useMovies(){
    const [isLoading, setIsLoading] = useState(true);
    const [moviesInTheaters, setMoviesInTheaters] = useState<Movie[]>([]);

    async function getMovies(){
        const response = await api.get<MoviesNowPlayingDTO>('/now_playing');
        const movies = response.data.results;
        setMoviesInTheaters( response.data.results );

        setIsLoading(false);
    }

    useEffect(() => {
        //now_playing
        getMovies();
    },[])
    
    return {
        moviesInTheaters,
        isLoading
    }

}