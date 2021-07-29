import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedMovies: []
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.likedMovies.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.likedMovies = state.likedMovies.filter(id => id !== action.payload);
    }
  }
});

export const { addMovie, removeMovie } = movieSlice.actions

export const getLikedMovie = (state) => state.movie.likedMovies

export default movieSlice.reducer
