import React from 'react';

class ShoppingCartPage extends React.Component {  
  
  mapProduct(title, price) {
    return(
    <div>
      <div data-testid="shopping-cart-product-name">{ title }</div>
      <div>{ price }</div>
    </div>
  )}
  
  render() {
    const { info } = this.props;
    const emptyCart = (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);

    return(
      <div>
      {(info.length === 0) ? emptyCart : info.map((product) => 
        this.mapProduct(product.title, product.price))}
      </div>
    );
  }
}

export default ShoppingCartPage;
