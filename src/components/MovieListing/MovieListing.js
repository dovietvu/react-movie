import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/moviesSlice'
import MovieCard from '../MovieCard/MovieCard.js'
import  './MovieListing.scss'

const MovieListing = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          {
            movies.Response === 'True' ? (
              movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie}></MovieCard>
              ))
            ) : (
              <div className='movie-error'>
                <h3>movies.Error</h3>
              </div>
            )
          }
          {
            shows.Response === 'True' ? (
              shows.Search.map((show, index) => (
                <MovieCard key={index} data={show}></MovieCard>
              ))
            ) : (
              <div className='movie-error'>
                <h3>shows.Error</h3>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default MovieListing