import { useState, useEffect, use } from "react";
import PropTypes from "prop-types";
import Movie from "../components/Movie";

function Home() {
  /* 변수 선언 */
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  

  /* 실행 함수 */
  const getMovies = async() => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=879f3b935fd322b0034009888967a2d7&language=ko-KR");
    const data = await response.json();

    setMovies(data.results);
    setLoading(false);
  }
  
  useEffect(()=> {
    getMovies();
  }, [])


  return (
    <div>
      <h1>영화목록 리스트 {loading ? "" : `(${movies.length})`}</h1>
      <div>
        <ul>
          {loading ? ("Loading.....") : (
            movies.map((movie) => (
              <Movie key={movie.id} id={movie.id} overview={movie.overview} title={movie.title} poster_path={movie.poster_path} />
            )
          ))}   
        </ul>
      </div>
    </div>
  )
}

export default Home;