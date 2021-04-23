import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.js";
import { fetchData } from "./utils/api.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    (async function () {
      const fetchedData = await fetchData(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&page=1"
      );
      this.setState({
        data: [...fetchedData],
      });
    }.bind(this)());
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <ul className="card-list">
          {data.map((crypto) => {
            return (
              <li key={crypto.symbol}>
                <Card
                  name={crypto.name}
                  image={crypto.image}
                  currentPrice={crypto.current_price}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
