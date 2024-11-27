import axios from 'axios';
import {IFilteredData} from './types';

export const axiosGetRequest = async (url: string) => {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    console.error('Axios Error:', error);
    throw new Error('Failed to fetch data');
  }
};

// Filter products by title or description
export const filterProducts = (products: any[], query: string) => {
  if (!query.trim()) return products;
  return products.filter(
    product =>
      product.title?.toLowerCase().includes(query.toLowerCase()) ||
      (product.description &&
        product.description.toLowerCase().includes(query.toLowerCase())),
  );
};

// Filter categories by name (or any array-specific field)
export const filterCategories = (categories: any[], query: string) => {
  if (!query.trim()) return categories;
  return categories.filter(category =>
    category.toLowerCase().includes(query.toLowerCase()),
  );
};
