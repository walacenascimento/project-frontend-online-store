import React from 'react';
import PropTypes from 'prop-types';

class ProductsCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt="thumbnail" />
        <p>{ price }</p>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductsCard;
