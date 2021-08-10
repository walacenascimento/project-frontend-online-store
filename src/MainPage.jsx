import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import ProductsCard from './ProductsCard';

class MainPage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.state = {
      productInput: '',
      responseAPI: [],
      loading: true,
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
        loading: false,
      });
    });
  }

  render() {
    const { productInput, responseAPI, loading } = this.state;
    const inputEmpty = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    return (
      <div>
        <label htmlFor="search-bar-input">
          <input
            type="text"
            data-testid="query-input"
            name="search-bar-input"
            value={ productInput }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchProduct }
        >
          Pesquisar
        </button>
        {loading === true ? inputEmpty : responseAPI
          .map((product) => <ProductsCard product={ product } key={ product.id } />)}
        <Link to="/shopping-cart">
          <button type="button" data-testid="shopping-cart-button">Cart</button>
        </Link>
      </div>
    );
  }
}

export default MainPage;
