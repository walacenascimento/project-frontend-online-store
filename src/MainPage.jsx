import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import CategoriesList from './CategoriesList';
import ProductsCard from './ProductsCard';

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

  // Função onClick para atualização do ID do estado - requisito 6

  // // Requisito 8
  // onClickButtonCart({ target: {id}}) {
  //   const object = JSON.parse(id);

  //   this.setState((previousState) => ({
  //     productCart: [...previousState, object],
  //   }))
  // }

  // Atualiza estado com o que for digitado no input (nome do produto)
  handleChange({ target }) {
    this.setState({
      productInput: target.value,
    });
  }

  onClick({ target }) {
    const { name } = target;
    this.setState({
      id: name,
    }, this.fetchProduct);
  }

  // Requisição à API do ML e atualização do estado com o resultado
  fetchProduct() {
    const { productInput, id } = this.state;

    getProductsFromCategoryAndQuery(id, productInput).then((response) => {
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
    const { onClickButtonCart } = this.props;

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
          .map((product) => (<ProductsCard
            product={ product }
            key={ product.id }
            onClickButtonCart={ onClickButtonCart }
          />))}
        <Link to="/shopping-cart">
          <button type="button" data-testid="shopping-cart-button">Cart</button>
        </Link>
        <CategoriesList onClick={ this.onClick } fetch={ this.fetchProduct } />
      </div>
    );
  }
}

MainPage.propTypes = {
  onClickButtonCart: PropTypes.func.isRequired,
};

export default MainPage;
