import React from "react";

class SearchBar extends React.Component {
  state = {
    city: "",
    noEntry: true,
  };

  onSubmit = (e) => {
    e.preventDefault();
    let concat = this.state.city.split(" ").join("").toUpperCase();
    this.props.getCityData(concat);

    if (this.state.city === "") {
      this.setState({ noEntry: true });
    } else {
      this.setState({ noEntry: false });
    }
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, isEmpty: true });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.onChange}
            placeholder={this.state.noEntry ? "Enter City..." : this.state.city}
          />
          <input className="btn" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
