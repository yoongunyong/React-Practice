import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, title, overview, poster_path}) {
  const movieBaseUrl = "https://image.tmdb.org/t/p/w200";

  return (
    <div>
      <div style={{ marginBottom: "30px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <h2  style={{ listStyle: "none", fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
        <Link to={`/movie/${id}`}>{title}</Link>
        <h3>{overview}</h3>
      </h2>
      <img 
      src={movieBaseUrl+poster_path} 
      alt={title} 
      style={{ width: "150px", borderRadius: "8px" }}
      />
      </div>
    </div>
  )
  
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired
}

export default Movie;