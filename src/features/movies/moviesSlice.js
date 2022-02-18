import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey.js'

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async () => {
        const movieText = "Harry"
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${movieText}&type=movie`
        )
            .catch((err) => {
                console.log(`err: `, err)
            })
        return response.data
    })

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async () => {
        const movieText = "Friends"
        const response = await movieApi.get(
            `?apiKey=${APIKey}&s=${movieText}&type=series`
        )
            .catch((err) => {
                console.log(`err: `, err)
            })
        return response.data
    })

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    'movies/fetchAsyncMovieOrShowDetail',
    async (id) => {
        const response = await movieApi.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        )
            .catch((err) => {
                console.log(`err: `, err)
            })
        return response.data
    })

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShowDetail: {}
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending');
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetched!');
            return {
                ...state,
                movies: payload
            }
        },
        [fetchAsyncMovies.rejected]: (state, { payload }) => {
            console.log('Rejected!');
            return {
                ...state,
                movies: payload
            }
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log('Fetched!');
            return {
                ...state,
                shows: payload
            }
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            console.log('Fetched!');
            return {
                ...state,
                selectMovieOrShowDetail: payload
            }
        },
    }
})

export const { removeSelectedMovieOrShow } = moviesSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectMovieOrShowDetail = (state) => state.movies.selectMovieOrShowDetail
export default moviesSlice.reducer