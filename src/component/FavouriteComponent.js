import React, { useState, useEffect } from 'react'
import { API, token } from "../shared/API";
import CardComponent from './CardComponent';
import { useSelector } from 'react-redux'
import { getLikedMovie } from "../features/counter/movieSlice"

function FavouriteComponent() {
    const favourite = useSelector(getLikedMovie);
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMoives();
    }, []);

    const getMoives = async () => {
        const dbList = await fetch(API,{
            method: 'GET',
            headers: new Headers({
                Authorization: token
            })
        });
        const dbJson = await dbList.json();
        setMovieList(dbJson.movies.filter(movie => favourite.has(movie.id)));
    }
    return (
        <div className="home">
            <div className="movie-block">
                <h1>Favourite Movies</h1>
                <div className="movie-container">
                    {movieList.map((movie) => {
                        return (
                            <CardComponent {...movie}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FavouriteComponent;