import React from 'react';
import PropTypes from 'prop-types';
import './ProductsCard.css';
// import { Link } from 'react-router-dom';

class ProductsCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;

    return (
      <div className="product-card border rounded" data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt="thumbnail" />
        <p>
          R$
          { price }
        </p>
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
};

export default ProductsCard;

// import React from 'react';
// import PropTypes from 'prop-types';
// import './ProductsCard.css';
// import { Link } from 'react-router-dom';

// class ProductsCard extends React.Component {
//   render() {
//     const { product } = this.props;
//     const { title, price, thumbnail, id } = product;

//     return (
//       <Link to={ `/product/${id}` } data-testid="product-detail-link">
//         <div className="product-card border rounded" data-testid="product">
//           <h4>{ title }</h4>
//           <img src={ thumbnail } alt="thumbnail" />
//           <p>
//             R$
//             { price }
//           </p>
//         </div>
//       </Link>
//     );
//   }
// }

// ProductsCard.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string,
//     price: PropTypes.number,
//     thumbnail: PropTypes.string,
//     id: PropTypes.number,
//   }).isRequired,
// };

// export default ProductsCard;
