import React from 'react';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search-bar-input">
          <input type="text" name="search-bar-input" />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/shopping-cart">
          <button type="button" data-testid="shopping-cart-button">Cart</button>
        </Link>
      </div>
    );
  }
}

export default MainPage;
