import React, { useState, useEffect } from 'react';
import { API, token } from "../shared/API";
import CardComponent from './CardComponent';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeComponent() {
    const [UAMovies, setUAMovies] = useState([]);
    const [AMovies, setAMovies] = useState([]);
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
        setUAMovies(dbJson.movies.filter((movie) => movie.classification !== '18+'));
        setAMovies(dbJson.movies.filter((movie) => movie.classification === '18+'));
    }
    return (
        <div className="home">
            <div className="movie-block">
                <h1>UA Movies</h1>
                <div className="movie-container">
                    <Carousel
                        infiniteLoop
                        centerMode
                        centerSlidePercentage={60}
                        showIndicators={false}
                    >
                    {UAMovies.map((movie) => {
                        return (
                            <CardComponent {...movie}/>
                        );
                    })}
                    </Carousel>
                </div>
            </div>
            <div className="movie-block">
                <h1>A Movies</h1>
                <div className="movie-container">
                    <Carousel
                        infiniteLoop
                        centerMode
                        centerSlidePercentage={60}
                        showIndicators={false}
                        autoFocus={true}
                        autoPlay={true}
                        swipeable={true}
                        emulateTouch={true}
                    >
                    {AMovies.map((movie) => {
                        return (
                            <CardComponent {...movie}/>
                        );
                    })}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent;
