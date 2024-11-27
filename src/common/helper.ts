import axios from 'axios';

/**
 * Generic axios function to get Async Data
 * @param url
 * @returns result
 */
export const axiosGetRequest = async (url: string) => {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    console.error('Axios Error:', error);
    throw new Error('Failed to fetch data');
  }
};

/**
 * Filtering Products items by title & description
 * @param products: IProducts
 * @param query: string
 * @returns Matching Products data
 */
export const filterProducts = (products: any[], query: string) => {
  if (!query.trim()) return products;
  return products.filter(
    product =>
      product.title?.toLowerCase().includes(query.toLowerCase()) ||
      (product.description &&
        product.description.toLowerCase().includes(query.toLowerCase())),
  );
};

/**
 * Filtering Categories items
 * @param categories: ICategory
 * @param query: string
 * @returns Matching Categories items
 */
export const filterCategories = (categories: any[], query: string) => {
  if (!query.trim()) return categories;
  return categories.filter(category =>
    category.toLowerCase().includes(query.toLowerCase()),
  );
};
