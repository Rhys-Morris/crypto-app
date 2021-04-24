import React from "react";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, searchText } = this.props;
    return (
      <nav className="nav">
        <h1 className="nav__logo">CryptoTrack</h1>
        <div className="nav__search-box">
          <label htmlFor="search" className="nav__search-label">
            Search
          </label>
          <input
            id="search"
            type="text"
            className="nav__search"
            placeholder="Search cryptocurrency"
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </nav>
    );
  }
}
