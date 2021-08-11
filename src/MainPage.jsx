import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from './services/api';
import CategoriesList from './CategoriesList';
import ProductsCard from './ProductsCard';

class MainPage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      productInput: '',
      responseAPI: [],
      loading: true,
      id: '',
    };
  }

  onClick({ target }) {
    const { name } = target;

    this.setState({
      id: name,
    }, this.fetchProduct);
  }

  // onClickCards({ target }) {
  //   console.log(target);
  // }

  handleChange({ target }) {
    this.setState({
      productInput: target.value,
    });
  }

  fetchProduct() {
    const { productInput, id } = this.state;

    getProductsFromCategoryAndQuery( id, productInput).then((response) => {
      this.setState({
        responseAPI: [...response.results],
        loading: false,
      });
    });
  }

  render() {
    const { productInput, responseAPI, loading } = this.state;
    const inputEmpty = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    
    return (
      <div>
        <label htmlFor="search-bar-input">
        <input
          type="text"
          data-testid="query-input"
          name="search-bar-input"
          value={ productInput }
          onChange={ this.handleChange }
        />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchProduct }
        >
          Pesquisar
        </button>
        {loading === true ? inputEmpty : responseAPI
          .map((product) => <ProductsCard product={ product } key={ product.id } onClick={ this.onClickCards } />)}
        <Link to="/shopping-cart">
          <button type="button" data-testid="shopping-cart-button">Cart</button>
        </Link>
        <CategoriesList onClick={ this.onClick } fetch={ this.fetchProduct }/>
      </div>
    );
  }
}
    
export default MainPage;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { getProductsFromCategoryAndQuery } from './services/api';
// import Main from './Main';
// import CategoriesList from './CategoriesList';
// import './MainPage.css';

// class MainPage extends React.Component {
//   constructor() {
//     super();
//     this.handleChange = this.handleChange.bind(this);
//     this.fetchProduct = this.fetchProduct.bind(this);


//     this.state = {
//       productInput: '',
//       responseAPI: [],
//       loading: true,
//     };
//   }

//   // constructor() {
//   //   super();
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.fetchProduct = this.fetchProduct.bind(this);
//   //   this.onClick = this.onClick.bind(this);

//   //   this.state = {
//   //     productInput: '',
//   //     responseAPI: [],
//   //     loading: true,
//   //     id: '',
//   //   };
//   // }

//   handleChange({ target }) {
//     this.setState({
//       productInput: target.value,
//     });
//   }

//   // onClick({ target }) {
//   //   const { name } = target;

//   //   this.setState({
//   //     id: name,
//   //   });
//   // }

//   fetchProduct() {
//     const { productInput } = this.state;

//     getProductsFromCategoryAndQuery('', productInput).then((response) => {
//       this.setState({
//         responseAPI: [...response.results],
//         loading: false,
//       });
//     });
//   }

//   // fetchProduct(productInput, id) {
//   //   getProductsFromCategoryAndQuery(id, productInput).then((response) => {
//   //     this.setState({
//   //       responseAPI: [...response.results],
//   //       loading: false,
//   //     });
//   //   });
//   // }

//   render() {
//     // const { productInput, responseAPI, loading, id } = this.state;
//     const { productInput, responseAPI, loading } = this.state;

//     return (
//       <div>

//         <div className="search-bar input-group mb-3">
//           <div id="input-button">
//             <label htmlFor="search-bar-input">
//               <input
//                 type="text"
//                 data-testid="query-input"
//                 name="search-bar-input"
//                 value={ productInput }
//                 onChange={ this.handleChange }
//               />
//             </label>
//             <button
//               type="button"
//               data-testid="query-button"
//               // onClick={ this.fetchProduct(productInput, id) }
//               onClick={ this.fetchProduct() }
//             >
//               Pesquisar
//             </button>
//           </div>

//           <Link to="/shopping-cart">
//             <button
//               type="button"
//               data-testid="shopping-cart-button"
//             >
//               Cart
//             </button>
//           </Link>

//         </div>

//         <div className="main-aside">
//           <CategoriesList />
//           {/* <CategoriesList onClick={ this.onClick } /> */}
//           <Main responseAPI={ responseAPI } loading={ loading } />
//         </div>

//       </div>
//     );
//   }
// }

// export default MainPage;
