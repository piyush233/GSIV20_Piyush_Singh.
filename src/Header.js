import React from "react";
import App from "./App";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sendData = e => {
    this.props.triggerSearch(e.target.value);
  };

  showHome = () => {
    console.log("clicked " + true);
    this.props.showHome(true);
  };

  render() {
    return (
      <nav class="white">
        <div class="nav-wrapper">
          <ul class="hide-on-med-and-down">
            <li class="search">
              <div class="center row search-bar">
                <div class="col s12">
                  <div class="row grey  search lighten-2">
                    <div class="input-field search-input col s6 s12 ">
                      <i class="grey-text material-icons prefix">search</i>
                      <input
                        type="text"
                        placeholder="Search"
                        id="autocomplete-input"
                        onChange={this.sendData.bind(this)}
                        class="autocomplete black-text"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
    );
  }
}

export default Header;
