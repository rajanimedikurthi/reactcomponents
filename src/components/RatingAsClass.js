import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};
class RatingAsClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0,
    };
    this.selectCallback = this.selectCallback.bind(this);
  }
  selectCallback(starsSelected) {
    this.setState({ starsSelected });
  }
  render() {
    const { totalStars } = this.props;
    const ratings = [...Array(parseInt(totalStars))];
    return (
      <>
        {ratings.map((rate, i) => (
          <Star
            key={i}
            selected={this.state.selectedStars > i}
            onSelect={() => this.selectCallback(i + 1)}
          />
        ))}
      </>
    );
  }
}

export default RatingAsClass;
