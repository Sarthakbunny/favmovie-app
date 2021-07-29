import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLikedMovie, addMovie, removeMovie } from '../features/movieSlice';

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
    const [fav, setfav] = useState(favourite.includes(props.id));
    const movieId = props.id;
    const handleChange = () => {
        if(fav === false){
            console.log("adding item", props.id);
            dispatch(addMovie(movieId));
        }
        else{
            console.log("removing item", props.id);
            dispatch(removeMovie(movieId))
        }
        setfav(!fav);
    }

    return (
            <div className="movie">
                <Link to={`/movie/${props.slug}`}><img src={props.backdrop} alt={props.title} />
                <div className="movie-info">
                    <h3>{props.title}</h3>
                    <span className={`tag ${setVoteClass(props.imdb_rating)}`}>{props.imdb_rating}</span>
                </div></Link>

                <div className="movie-over">
                    <h2>Overview</h2>
                    <p>{props.overview}</p>
                    <div>
                        <input checked={fav} type="checkbox" onChange={() => handleChange()} /> Favourite
                    </div>
                </div>
            </div>
    );
}

export default CardComponent;
