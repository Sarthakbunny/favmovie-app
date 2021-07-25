import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedMovies: new Set([1,2,3])
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.likedMovies.add(action.payload);
    },
    removeMovie: (state, action) => {
      state.likedMovies.delete(action.payload);
    }
  }
});

export const { addMovies, removeMovie } = movieSlice.actions;

export const getLikedMovie = (state) => state.movie.likedMovies;

export default movieSlice.reducer;
