import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartPage extends React.Component {
  mapProduct(title, price, count) {
    return (
      <div>
        <div data-testid="shopping-cart-product-name">{ title }</div>
        <div>{ price }</div>
        <div data-testid="shopping-cart-product-quantity">{ count }</div>
      </div>
    );
  }

  render() {
    const { info } = this.props;
    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );

    return (
      <div>
        {(info.length === 0)
          ? emptyCart : info
            .map((product) => this
              .mapProduct(product.title, product.price, product.count))}
      </div>
    );
  }
}

ShoppingCartPage.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    count: PropTypes.number,
    length: PropTypes.func,
    map: PropTypes.func,
  }).isRequired,
};

export default ShoppingCartPage;
