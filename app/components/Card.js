import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image, currentPrice } = this.props;
    return (
      <div className="card">
        <h3 className="card__header">{name}</h3>
        <img src={image} className="card__image" />
        <p className="card__price">{`Current Price: $${currentPrice}`}</p>
      </div>
    );
  }
}
