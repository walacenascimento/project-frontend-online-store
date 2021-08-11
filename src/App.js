import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import ProductDetails from './ProductDetails';
import ShoppingCartPage from './ShoppingCartPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart">
            <ShoppingCartPage />
          </Route>
          <Route exact path="/">
            <MainPage />
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
