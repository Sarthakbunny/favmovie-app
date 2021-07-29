import React, { useState, useEffect } from 'react'
import { API, token } from "../shared/API";
import CardComponent from './CardComponent';
import { useSelector } from 'react-redux'
import { getLikedMovie } from "../features/movieSlice"
import { Carousel } from 'react-responsive-carousel'

function FavouriteComponent() {
    const favourite = useSelector(getLikedMovie);
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMoives();
    }, []);

    const getMoives = async () => {
        fetch(API,{
            method: 'GET',
            headers: new Headers({
                Authorization: token
            })
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            return setMovieList(data.movies.filter(movie => favourite.includes(movie.id)));
        })
    }
    return (
        <div className="home">
            <div className="movie-block">
                <h1>Favourite Movies</h1>
                <div className="movie-container">
                <Carousel
                        infiniteLoop
                        centerMode
                        centerSlidePercentage={60}
                        showIndicators={false}
                    >
                    {movieList.map((movie) => {
                        return (
                            <CardComponent {...movie}/>
                        );
                    })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default FavouriteComponent;