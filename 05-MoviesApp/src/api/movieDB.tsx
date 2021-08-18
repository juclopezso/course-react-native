import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a42743a01003005665be7586763b8d46',
    language: 'es'
  }
})

export default movieDB;