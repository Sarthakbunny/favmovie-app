import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLikedMovie, addMovies, removeMovie } from '../features/counter/movieSlice';

const setVoteClass = (rate) => {
    if(rate >= 8)
        return 'green';
    else if(rate >= 6)
        return "orange";
    else
        return "red";
}


function CardComponent(props) {
    const favourite = useSelector(getLikedMovie);
    const dispatch = useDispatch();
    const [fav, setfav] = useState(favourite.has(props));
    console.log(fav);
    return (
            <div className="movie">
                <Link to={`/movie/${props.slug}`}><img src={props.backdrop} alt={props.title} />
                <div className="movie-info">
                    <h3>{props.title}</h3>
                    <span className={`tag ${setVoteClass(props.imdb_rating)}`}>{props.imdb_rating}</span>
                </div></Link>

                <div className="movie-over">
                    <h2>Overview</h2>
                    <p>{props.overview.slice(0,150)}<Link to={`/movie/${props.slug}`}>Read more...</Link></p>
                    <div>
                        <input checked={fav} type="checkbox" onChange={() => setfav(!fav)} /> Favourite
                    </div>
                </div>
            </div>
    );
}

export default CardComponent;
