export async function getCategories() {
  const apiMercadoLivre = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await apiMercadoLivre.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiMercadoLivre = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categories = await apiMercadoLivre.json();
  return categories;
}
