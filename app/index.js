import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.js";
import Nav from "./components/Nav.js";
import { fetchData } from "./utils/api.js";
import { filterCards } from "./utils/helper.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filtered: [],
      searchText: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    (async function () {
      const fetchedData = await fetchData(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&page=1"
      );
      this.setState({
        data: [...fetchedData],
        filtered: [...fetchedData],
      });
    }.bind(this)());
  }

  handleChange(value) {
    const { data } = this.state;
    const filtered = filterCards(data, value);

    this.setState({
      searchText: value,
      filtered: [...filtered],
    });
  }

  render() {
    const { data, searchText, filtered } = this.state;
    console.log(data);

    return (
      <div className="container">
        <Nav handleChange={this.handleChange} searchText={searchText} />
        <ul className="card-list">
          {filtered.map((crypto) => {
            return (
              <li key={crypto.symbol}>
                <Card data={crypto} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
