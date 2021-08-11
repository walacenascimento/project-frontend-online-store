import React from 'react';
import PropTypes from 'prop-types';
import ProductsCard from './ProductsCard';
import './Main.css';

class Main extends React.Component {
  render() {
    const inputEmpty = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );

    const { responseAPI, loading } = this.props;

    return (
      <main className="main-product">
        {loading === true ? inputEmpty : responseAPI
          .map((product) => <ProductsCard product={ product } key={ product.id } />)}
      </main>
    );
  }
}

Main.propTypes = {
  responseAPI: PropTypes.arrayOf.isRequired,
  loading: PropTypes.string.isRequired,
};

export default Main;
