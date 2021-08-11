import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import Main from './Main';
import CategoriesList from './CategoriesList';
import './MainPage.css';

class MainPage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      productInput: '',
      responseAPI: [],
      loading: true,
      id: '',
    };
  }

  handleChange({ target }) {
    this.setState({
      productInput: target.value,
    });
  }

  onClick({ target }) {
    const { name } = target;

    this.setState({
      id: name,
    });
  }

  fetchProduct(productInput, id) {
    getProductsFromCategoryAndQuery(id, productInput).then((response) => {
      this.setState({
        responseAPI: [...response.results],
        loading: false,
      });
    });
  }

  render() {
    const { productInput, responseAPI, loading, id } = this.state;

    return (
      <div>

        <div className="search-bar input-group mb-3">
          <div id="input-button">
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
              onClick={ this.fetchProduct(productInput, id) }
            >
              Pesquisar
            </button>
          </div>

          <Link to="/shopping-cart">
            <button
              type="button"
              data-testid="shopping-cart-button"
            >
              Cart
            </button>
          </Link>

        </div>

        <div className="main-aside">
          <CategoriesList onClick={ this.onClick } />
          <Main responseAPI={ responseAPI } loading={ loading } />
        </div>

      </div>
    );
  }
}

export default MainPage;
