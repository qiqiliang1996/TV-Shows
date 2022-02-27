import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";



const movieText = "cats";
const showText = "girls";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async ()=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);   
    return response.data;

});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async ()=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${showText}&type=series`)    
    return response.data;
});


export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',async (id)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    console.log(response.data,'111');     
    return response.data;
});

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{},
}

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
  
        removeSelectedMovieOrShow:(state)=>{
            state.selectMovieOrShow = {}
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log('fetchAsyncMovies fulfilled');
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('rejected');
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log('fetchAsyncShows fulfilled');
            return {...state,shows:payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log('fetchmovieOrShowDetail fulfilled222');
            return {...state,selectMovieOrShow:payload}
        },

    }
});

export const {removeSelectedMovieOrShow} = movieSlice.actions;
export default movieSlice.reducer;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.selectMovieOrShow;