import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // we need snnipet of code which runs on a specific condition/variable
  useEffect(() => {
    //if [], run once when the row loads, and dont run it again
    //we call it dependencies if we add [movies] then its depend on movies
    // here we need to make an asyncronus call
    async function fetchData() {
      //wait for the sever to respond and then do something
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    //when ever we pull any data in useEffect() its very important to add it as a dependency
    //why fetchUrl? this because we are telling useEffect that we are using a property which is outside the useEffect() PROPS
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay:1,
    }
  };

  const handleClick=(movie)=>{
    if (trailerUrl){
      setTrailerUrl('');
    }else{
      movieTrailer(movie?.name || "")
      .then((url)=>{
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));

      }).catch(error=> console.log(error))
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube  videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}
