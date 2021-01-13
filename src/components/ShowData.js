import React from "react";
import ShowItem from "./ShowItem";

class ShowData extends React.Component {
  render() {
    return this.props.cityData.map((city) => (
      <ShowItem key={city} cityData={city} />
    ));
  }
}

export default ShowData;
