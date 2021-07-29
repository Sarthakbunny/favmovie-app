import React, { useState, useEffect } from 'react';
import { API, token } from '../shared/API';

function MovieComponent() {
    const slug = document.URL.split('/').slice(-1).pop();
    const [movie, setmovie] = useState({
        title: '',
        backdrop: '',
        cast: [],
        genres: [],
        classification: '',
        director: '',
        imdb_rating: '',
        overview: ''
    });
    useEffect(() => {
        getMoive();
    }, []);

    const getMoive = () => {
        fetch(`${API}/${slug}`,{
            method: 'GET',
            headers: new Headers({
                Authorization: token
            })
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            return setmovie(data);
        })
    }
    return (
        <div className="card">
            <div className="card-header">
                <h3>{movie.title}</h3>
            </div>
            <div className="card-media">
                <img src={movie.backdrop} alt={movie.title} />
            </div>
            <div className="card-body">
                <div className="row">
                    <label>Cast:</label>
                    <ul>
                        {movie.cast.map(actor => <li>{actor}</li>)}
                    </ul>
                </div>
                <div className="row">
                    <label>Classification:</label>
                    <div>{movie.classification}</div>
                </div>
                <div className="row">
                    <label>Director:</label>
                    <div>{movie.director}</div>
                </div>
                <div className="row">
                    <label>Genres:</label>
                    <ul>
                        {movie.genres.map(genre => <li>{genre}</li>)}
                    </ul>
                </div>
                <div className="row">
                    <label>IMDB rating:</label>
                    <div>{movie.imdb_rating}</div>
                </div>
                <div className="row">
                    <label>Length:</label>
                    <div>{movie.length}</div>
                </div>
                <div className="row">
                    <label>Overview:</label>
                    <div>{movie.overview}</div>
                </div>
            </div>
        </div>
        )
}

export default MovieComponent;
