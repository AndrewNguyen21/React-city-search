import React from "react";
import "./../App.css";
import SearchBar from "./SearchBar";
import ShowData from "./ShowData";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();

    this.state = { cityData: [] };
  }

  //API request
  getCityData = (name) => {
    axios
      .get(`https://ctp-zip-api.herokuapp.com/city/${name}`)
      .then((res) => {
        this.setState({ cityData: res.data });
        this.success();
      })
      .catch((err) => {
        this.setState({ cityData: [] });
        this.fail();
      });
  };

  success = () => {
    console.log(this.state.cityData);
    document.getElementById("error").style.display = "none";
  };

  fail = () => {
    document.getElementById("error").style.display = "block";
    setTimeout(this.goodRes, 2000);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>City Search</h1>
          <p>Enter a City Name to find more info!</p>
          <SearchBar getCityData={this.getCityData} />
          <p id="error">City Not Found!</p>
          <div className="zipContainer">
            <ShowData cityData={this.state.cityData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
