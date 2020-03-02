import React from "react";
import MovieDetail from "./MovieDetail";

class MovieRow extends React.Component {
  constructor(props) {
    super(props);
  }

  viewmovie() {
    this.props.triggerMovie(true);
    this.props.showMovie(this.props.movie);
  }

  render() {
    return (
      <div class="col s12 m6 l3">
        <div class="card movie-card">
          <div class="card-content">
            <span class="card-title">
              <img
                alt="poster"
                width="200"
                height="250"
                src={this.props.movie.poster_src}
              />
            </span>
            <div class="card-action">
              <div class="left movie-name">{this.props.movie.title}</div>
              <br />
              <div class="right rating">{this.props.movie.vote_average}</div>
              <input
                type="button"
                onClick={this.viewmovie.bind(this)}
                value="View"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieRow;
