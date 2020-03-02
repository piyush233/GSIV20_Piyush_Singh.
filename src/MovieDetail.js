import React from "react";
class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log("movie name is " + this.props.movie.title);
  }

  showHome = () => {
    console.log("clicked " + true);
    this.props.showHome(true);
  }
  render() {
    return (
      <div>
        <nav class="white">
          <div class="nav-wrapper">
            <ul class="hide-on-med-and-down">
              <li class="search">
                <h6 class="movieName left">{this.props.movie.title}</h6>
              </li>
            </ul>

            <span onClick={this.showHome}>
              <img
                class="right home-icon"
                src="https://img.icons8.com/material-rounded/24/000000/home.png"
              />
            </span>
          </div>
        </nav>
        <div class="row">
          <div class="col s12 m7">
            <div>
              <div class="row">
                <div class="col s3">
                  <div class="movieImage">
                    <img
                      alt="poster"
                      width="200"
                      height="250"
                      src={this.props.movie.poster_src}
                    />
                  </div>
                </div>
                <div class="col s6">
                  <div>
    <h5> {this.props.movie.title} ({this.props.movie.vote_average})</h5>
                  </div>
                  <div>
                    <p>Discription : {this.props.movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
