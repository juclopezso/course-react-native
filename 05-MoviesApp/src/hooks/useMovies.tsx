import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface'


interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    // enforce to hace always a state 
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  })

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing')
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular')
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated')
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming')

    // resolves all promises at one call
    const responses = await Promise.all([
      nowPlayingPromise, 
      popularPromise, 
      topRatedPromise, 
      upcomingPromise 
    ])

    setMoviesState({
      // order defined by the above responses
      nowPlaying: responses[0].data.results,
      popular: responses[1].data.results,
      topRated: responses[2].data.results,
      upcoming: responses[3].data.results,
    })

    setIsLoading(false);
  }

  useEffect(() => {
    // now playing movies
    getMovies();
  }, [])

  return {
    ...moviesState,
    isLoading
  }

}
