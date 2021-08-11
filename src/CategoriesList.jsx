import React from 'react';
import { getCategories } from './services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.fetchCategories = this.fetchCategories.bind(this);
    this.state = {
      loading: true,
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categoriesList = await getCategories();
    this.setState({
      loading: false,
      categories: [...categoriesList],
    });
  }

  mapCategories(categories) {
    const { onClick } = this.props;

    return categories.map((category) => (
      <div key={ category.id }>
      <input data-testid="category" type="radio" name={ category.id } onClick={ onClick }  />
      { category.name }
      </div>
    ));
  }

  render() {
    const { loading, categories } = this.state;
    const loadingElement = (<p>Carregando...</p>);
    return (
    <div>
    { loading ? loadingElement : this.mapCategories(categories) }
    </div>
    );
  }
}

export default CategoriesList; 

// import React from 'react';
// import { getCategories } from './services/api';
// import './CategoriesList.css';

// class CategoriesList extends React.Component {
//   constructor() {
//     super();
//     this.fetchCategories = this.fetchCategories.bind(this);
//     this.state = {
//       loading: true,
//       categories: [],
//     };
//   }

//   componentDidMount() {
//     this.fetchCategories();
//   }

//   async fetchCategories() {
//     const categoriesList = await getCategories();
//     this.setState({
//       loading: false,
//       categories: [...categoriesList],
//     });
//   }

//   mapCategories(categories) {
//     const { onClick } = this.props;

//     return categories.map((category) => (
//       <div data-testid="category" key={ category.id }>
//         <input type="radio" name={ category.id } />
//         { category.name }
//       </div>
//     ));
//   }

//   mapCategories(categories) {
//     const { onClick } = this.props;

//     return categories.map((category) => (
//       <div data-testid="category" key={ category.id }>
//         <input type="radio" name={ category.id } onClick={ onClick } />
//         { category.name }
//       </div>
//     ));
//   }

//   render() {
//     const { loading, categories } = this.state;
//     const loadingElement = (<p>Carregando...</p>);
//     return (
//       <aside className="aside-categories">
//         { loading ? loadingElement : this.mapCategories(categories) }
//       </aside>

//     );
//   }
// }

// export default CategoriesList;
