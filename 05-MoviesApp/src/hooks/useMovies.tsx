import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface'

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [nowMovies, setNowMovies] = useState<Movie[]>([])
  const [popularMovies, setPopularMovies] = useState<Movie[]>([])

  const getMovies = async () => {
    const resNowPlaying = await movieDB.get<MovieDBMoviesResponse>('/now_playing')
    const resPopular = await movieDB.get<MovieDBMoviesResponse>('/popular')
    setNowMovies(resNowPlaying.data.results)
    setPopularMovies(resPopular.data.results)


    setIsLoading(false);
  }

  useEffect(() => {
    // now playing movies
    getMovies();
  }, [])

  return {
    nowMovies,
    popularMovies,
    isLoading
  }

}
