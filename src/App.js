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
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// ====================== CÓDIGO QUE FUNCIONA ================
// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import MainPage from './MainPage';
// import ProductDetails from './ProductDetails';
// import ShoppingCartPage from './ShoppingCartPage';

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/shopping-cart">
//             <ShoppingCartPage />
//           </Route>
//           <Route exact path="/">
//             <MainPage />
//           </Route>
//           <Route
//             path="/product/:id"
//             render={ (props) => <ProductDetails { ...props } /> }
//           />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
