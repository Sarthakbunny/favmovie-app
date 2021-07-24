import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedMovies: new Set()
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.likedMovies.add(action.payload);
    },
    removeMovie: (state, action) => {
      state.value.delete(action.payload);
    }
  }
});

export const { addMovies, removeMovie } = movieSlice.actions;

export const getLikedMovie = (state) => state.counter.likedMovies;

export default movieSlice.reducer;
