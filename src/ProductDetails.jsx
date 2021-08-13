import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Attributes from './Attributes';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      attributesLoading: false,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          product: res,
          attributesLoading: true,
        });
      });
  }

  render() {
    const { product, attributesLoading } = this.state;
    const { title, thumbnail, price, attributes } = product;
    const loading = (<div>Carregando...</div>);
    const { onClickButtonCart } = this.props;

    if (attributesLoading === false) return loading;

    return (
      <div>
        <header>
          <Link to="/">
            <button
              type="button"
            >
              Voltar
            </button>
          </Link>
          <Link to="/shopping-cart">
            <button
              type="button"
              data-testid="shopping-cart-button"
              onClick={ () => onClickButtonCart(product) }
            >
              CART
            </button>
          </Link>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
          >
            Add to Cart
          </button>
        </header>
        <div>
          <div>
            <div data-testid="product-detail-name">
              { title }
              -
            </div>
            <div>
              R$
              { price }
            </div>
          </div>
          <div>
            <img src={ thumbnail } alt={ title } />
            <div>
              Especificações Técnicas
              {attributes.map((attribute) => (
                <Attributes
                  key={ attribute.id }
                  name={ attribute.name }
                  valueName={ attribute.value_name }
                />
              ))}
            </div>
            <div>
              <textarea
                data-testid="product-detail-evaluation"
                placeholder="Avaliações do produto"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
  onClickButtonCart: PropTypes.func.isRequired,
};

export default ProductDetails;
