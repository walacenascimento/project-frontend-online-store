import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import SearchBar from

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
