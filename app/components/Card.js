import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image, currentPrice } = this.props;
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} size={100} />
        <p>{currentPrice}</p>
      </div>
    );
  }
}
