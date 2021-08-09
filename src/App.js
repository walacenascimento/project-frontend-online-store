import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/">
          <SearchBar />
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
