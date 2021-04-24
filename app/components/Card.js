import React from "react";
import { formatPrice } from "../utils/helper.js";

const priceChangeStyle = {
  height: "5rem",
  width: "100%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2rem",
  borderRadius: ".3rem",
};

const increasePrice = {
  backgroundColor: "green",
};
const decreasePrice = {
  backgroundColor: "red",
};

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    const { name, image, symbol } = data;
    const [currentPrice, priceChange, marketCap, volume] = [
      data["current_price"],
      data["price_change_percentage_24h"],
      data["market_cap"],
      data["total_volume"],
    ];

    return (
      <div className="card">
        <div className="card__header">
          <h3 className="card__name">{name}</h3>
          <h4 className="card__symbol">{symbol}</h4>
        </div>
        <img src={image} className="card__image" />
        <p className="card__price">{`$${formatPrice(
          currentPrice.toFixed(2),
          true
        )}`}</p>
        <p className="card__market-cap">{`Market Cap: $${formatPrice(
          marketCap
        )}`}</p>
        <p className="card__volume">{`Total Volume: $${formatPrice(
          volume
        )}`}</p>
        <div
          className="card__price-change"
          style={
            priceChange >= 0
              ? { ...increasePrice, ...priceChangeStyle }
              : { ...decreasePrice, ...priceChangeStyle }
          }
        >
          <p className="card__price-change__percent">
            {priceChange.toFixed(2)}%
          </p>
        </div>
      </div>
    );
  }
}
