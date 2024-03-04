import { createAsyncThunk } from "@reduxjs/toolkit";
import movies from "../../Data/poster_movie";
import { Movie } from "../../Auth/Dependency";

export const showMoviesData = createAsyncThunk(
    'showMoviesData',
    
    async (args, {rejectWithValue}) => {
        try{
            const movieResult = movies;
            // console.log("movie data thunk ",movieResult)
            return movieResult;
        }
        catch(error){
            return rejectWithValue(error);
        }
    }
)