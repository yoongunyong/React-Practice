import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {

  const {id} = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const movieBaseUrl = "https://image.tmdb.org/t/p/w200";

  const getMovie = async() => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=879f3b935fd322b0034009888967a2d7&language=ko-KR`);
    const data = await response.json();
    setMovie(data);
    setLoading(false);
  }

  useEffect(()=> {
    getMovie();
  }, [])

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <div style={{ position: "relative", marginBottom: "30px" }}>
             <img 
               src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
               alt="background"
               style={{ width: "100%", borderRadius: "15px", opacity: 0.7 }}
             />
             <h1 style={{ position: "absolute", bottom: "20px", left: "20px", color: "white", textShadow: "2px 2px 4px #000" }}>
               {movie.title}
             </h1>
          </div>

          <div style={{ display: "flex", gap: "30px" }}>
            <img 
              src={`${movieBaseUrl}${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: "300px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" }}
            />

            <div style={{ flex: 1 }}>
              <p><strong>개봉일:</strong> {movie.release_date}</p>
              <p><strong>평점:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10</p>
              <p><strong>상영 시간:</strong> {movie.runtime}분</p>
          
              <div style={{ margin: "10px 0" }}>
                <strong>장르: </strong>
                {movie.genres.map((genre) => (
                  <span key={genre.id} style={{ marginRight: "10px", background: "#eee", padding: "2px 8px", borderRadius: "5px", fontSize: "14px" }}>
                    {genre.name}
                  </span>
                ))}
              </div>

              <hr />
              <h3>줄거리</h3>
              <p style={{ lineHeight: "1.6", color: "#333" }}>{movie.overview}</p>
              
              {/* 태그라인 */}
              <p style={{ fontStyle: "italic", color: "#666" }}>"{movie.tagline}"</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;