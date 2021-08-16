import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface'

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [nowMovies, setNowMovies] = useState<Movie[]>([])

  const getMovies = async () => {
    const res = await movieDB.get<MovieDBNowPlaying>('/now_playing')
    setNowMovies(res.data.results)


    setIsLoading(false);
  }

  useEffect(() => {
    // now playing movies
    getMovies();
  }, [])

  return {
    nowMovies,
    isLoading
  }

}
