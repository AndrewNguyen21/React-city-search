import React, { Component } from "react";

export class ShowItem extends Component {
  render() {
    return (
      <div className="zip">
        <li>{this.props.cityData}</li>
      </div>
    );
  }
}

export default ShowItem;
