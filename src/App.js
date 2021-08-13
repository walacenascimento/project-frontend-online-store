import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import ProductDetails from './ProductDetails';
import ShoppingCartPage from './ShoppingCartPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      infoCart: [],
    };
    this.onClickButtonCart = this.onClickButtonCart.bind(this);
    //    this.addQuantity = this.addQuantity.bind(this);
    //    this.addSubQuantity = this.addSubQuantity.bind(this);
  }

  onClickButtonCart(productProductsCard) {
    const { infoCart } = this.state;
    const { title, price } = productProductsCard;
    // // Lógica feita com a ajuda do monitor Eduardo.
    const findProduct = infoCart.find((p) => p.title === title);
    if (findProduct) {
      const finalResult = infoCart.map((product) => {
        if (product.title === title) {
          return { ...product, count: product.count + 1 };
        }
        return product;
      });
      this.setState({ infoCart: finalResult });
    } else {
      this.setState((previousState) => ({
        infoCart: [{
          title,
          price,
          count: 1,
        }, ...previousState.infoCart],
      }));
    }
  }

  // adicionar quantidade
  /* addQuantity(product) {
    const { infoCart } = this.state;
    this.setState({
      infoCart: [...infoCart, product],
    });
  }

  // subtrair quantidade // usando consulta a documentação O método indexOf() retorna o primeiro índice
  // em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
  subQuantity(product) {
    const { infoCart } = this.state;
    const newCart = infoCart.indexOf(product);
    const end = infoCart.reduce((acum, curr, newCart) => (
      newCart === newCart ? acum : acum.concat(curr),[]);
      this.setState({
        infoCart: newCart,
      });
  }
*/
  render() {
    const { infoCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/shopping-cart"
          >
            <ShoppingCartPage info={ infoCart } />
          </Route>
          <Route exact path="/">
            <MainPage onClickButtonCart={ this.onClickButtonCart } />
          </Route>
          <Route
            path="/product/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              onClickButtonCart={ this.onClickButtonCart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
