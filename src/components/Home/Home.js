import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/moviesSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAsyncMovies('Harry'))
    dispatch(fetchAsyncShows('Friend'))
  }, [])
  return (
    <div className='banner-img'>
      <MovieListing />
    </div>
  )
}

export default Home