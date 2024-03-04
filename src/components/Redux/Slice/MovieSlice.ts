import { createSlice } from "@reduxjs/toolkit";
import { showMoviesData } from "../Thunk/MovieThunk";
import { Movie } from "../../Auth/Dependency";

export interface InitialStateMovieData{
        moviesData: Movie[],
        loading: boolean,
        error: String,
 }

export const MoviesSlice =  createSlice({
    name: "movies",
    initialState: {
        moviesData: [],
        loading: false,
        error: "",
    } as InitialStateMovieData,
    reducers: {
        showAllData: (state, action) => {
            console.log("state.moviesData", state.moviesData)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(showMoviesData.pending, (state) => {
            state.loading = true;
        })
        .addCase(showMoviesData.fulfilled, (state, action) => {
            state.loading = false;
            state.moviesData = action.payload;
        })
        .addCase(showMoviesData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})
export const {showAllData} = MoviesSlice.actions;
export default MoviesSlice.reducer;