import React from 'react';
import { getCategories } from './services/api';

class CategoriesList extends React.Component {
  constructor() {
    super();
    this.teste = this.teste.bind(this);
    this.state = {
      loading: true,
      categories: [],
    };
  }

  componentDidMount() {
    this.teste();
  }

  async teste() {
    const categoriesList = await getCategories();
    this.setState({
      loading: false,
      categories: [...categoriesList],
    });
  }

  mapCategories(categories) {
    return categories.map((category) => (
      <div data-testid="category" key={ category.id }>
        <input type="radio" name={ category.id } />
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
