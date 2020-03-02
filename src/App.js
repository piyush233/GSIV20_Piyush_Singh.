import React, { Component } from "react";
import Header from "./Header.js";
import $ from "jquery";
import MovieDetail from "./MovieDetail";

import "./App.css";
import MovieRow from "./MovieRow.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: false };
    this.state = { movie: null };
    this.state = { isHome: false };
    this.upcomingMovies();
    this.searchChangehandler = this.searchChangehandler.bind(this);
    this.viewMovie = this.viewMovie.bind(this);
    this.showMovie = this.showMovie.bind(this);
    this.showHome = this.showHome.bind(this);
  }

  upcomingMovies() {
    console.log("Perform search using movieDB");
    const urlString =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=61f235ffc50bb3542c9cc741ba755b77&language=en-US&page=1";
    $.ajax({
      url: urlString,
      success: searchResult => {
        console.log("successfully fetched data");
        const results = searchResult.results;
        //console.log(results);
        var movieRows = [];
        results.forEach(movie => {
          console.log(movie.title);
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = (
            <MovieRow
              movie={movie}
              triggerMovie={this.viewMovie}
              showMovie={this.showMovie}
            />
          );
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data");
      }
    });
  }

  searchMovie(searchParam) {
    console.log("Perform search using movieDB");
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=61f235ffc50bb3542c9cc741ba755b77&language=en-US&query=${searchParam}{&page=1&include_adult=false`;
    $.ajax({
      url: urlString,
      success: searchResult => {
        console.log("successfully fetched data");
        const results = searchResult.results;
        //console.log(results);
        var movieRows = [];
        results.forEach(movie => {
          console.log(movie.title);
          movie.poster_src =
            "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = (
            <MovieRow movie={movie} triggerMovie={this.viewMovie} />
          );
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.log("Failed to fetch data");
      }
    });
  }

  searchChangehandler = data => {
    console.log(data);
    this.searchMovie(data);
  };

  viewMovie(data) {
    console.log(data);
    this.setState({ view: data });
  }

  showMovie(data) {
    this.setState({ movie: data });
  }

  showHome(data) {
    this.setState({ isHome: data });
  }

  render() {
    if (!this.state.view || this.state.isHome) {
      return (
        <div className="App">
          <Header
            triggerSearch={this.searchChangehandler}
            showHome={this.showHome}
          />
          <div class="row">{this.state.rows}</div>
        </div>
      );
    } else {
      return <MovieDetail movie={this.state.movie} showHome={this.showHome} />;
    }
  }
}

export default App;
