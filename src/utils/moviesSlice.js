import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies:null,
        topRatedMovies:null,
        upcominMovies:null,
        trailerVideo: null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcominMovies=action.payload;
        },

    },
});
export const {addNowPlayingMovies, addUpcomingMovies,addTrailerVideo, addPopularMovies, addTopRatedMovies} =movieSlice.actions
export default movieSlice.reducer;