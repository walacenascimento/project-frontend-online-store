import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search-bar-input">
          <input type="text" name="search-bar-input" />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default SearchBar;
