import React from 'react';
import './App.css';
import Row from "./component/Row";
import Banner from "./component/Banner";
import requests from './request';
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <Banner/>



      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      {/* if there is no equal sign its equal to true */}
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;
