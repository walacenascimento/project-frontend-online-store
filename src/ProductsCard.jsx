import React from 'react';
import PropTypes from 'prop-types';
import './ProductsCard.css';
import { Link } from 'react-router-dom';

class ProductsCard extends React.Component {
  render() {
    const { product, onClickButtonCart } = this.props;
    const { title, price, thumbnail, id } = product;

    return (
      <div>
        <Link to={ `/product/${id}` } data-testid="product-detail-link">
          <div className="product-card border rounded" data-testid="product" id={ id }>
            <h4>{ title }</h4>
            <img src={ thumbnail } alt="thumbnail" />
            <p>
              R$
              { price }
            </p>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => onClickButtonCart(product) }
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onClickButtonCart: PropTypes.func.isRequired,
};

export default ProductsCard;
