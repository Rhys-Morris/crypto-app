import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.js";
import Nav from "./components/Nav.js";
import Loading from "./components/Loading.js";
import { fetchData, delay } from "./utils/api.js";
import { filterCards } from "./utils/helper.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      filtered: [],
      searchText: "",
      loading: true,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    (async function () {
      const fetchedData = await fetchData(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&page=1"
      );
      await delay(2000);
      this.setState({
        data: [...fetchedData],
        filtered: [...fetchedData],
        loading: false,
        searchText: "",
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
    const { data, searchText, filtered, loading } = this.state;
    console.log(data);

    if (loading)
      return (
        <React.Fragment>
          <Nav handleChange={this.handleChange} searchText={searchText} />
          <div className="container">
            <Loading />
          </div>
        </React.Fragment>
      );

    return (
      <React.Fragment>
        <Nav handleChange={this.handleChange} searchText={searchText} />
        <div className="container">
          {filtered.length > 0 && (
            <ul className="card-list">
              {filtered.map((crypto) => {
                return (
                  <li key={crypto.symbol}>
                    <Card data={crypto} />
                  </li>
                );
              })}
            </ul>
          )}
          {filtered.length === 0 && !loading && (
            <p class="empty">No results for that search query</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
