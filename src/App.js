import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import MainPage from './MainPage';
import ShoppingCartPage from './ShoppingCartPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/shopping-cart">
              <ShoppingCartPage />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
          <CategoriesList />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
