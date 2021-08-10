import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';

class MainPage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.state = {
      productInput: '',
      responseAPI: [],
    };
  }

  handleChange({ target }) {
    this.setState({
      productInput: target.value,
    });
  }

  fetchProduct() {
    const { productInput } = this.state;
    getProductsFromCategoryAndQuery('', productInput).then((response) => {
      this.setState({
        responseAPI: [...response.results],
      });
    });
  }

  render() {
    const { productInput } = this.state;
    return (
      <div>
        <label htmlFor="search-bar-input">
          <input
            type="text"
            name="search-bar-input"
            value={ productInput }
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" onClick={ this.fetchProduct }>Pesquisar</button>
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
