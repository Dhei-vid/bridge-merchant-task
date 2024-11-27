import {axiosGetRequest} from '../common/helper';
import {ICategories, IProducts} from '../common/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 *
 * @returns Categories result (Promise) - array of Categories
 */
export const fetchCategories = async (): Promise<ICategories> => {
  try {
    const result = await axiosGetRequest(
      'https://fakestoreapi.com/products/categories',
    );
    if (result && result.data) {
      return result.data as ICategories;
    } else {
      throw new Error('No data received');
    }
  } catch (error) {
    console.error('Fetch Categories Error: ', error);
    throw error;
  }
};

/**
 *
 * @returns Products result (Promise) - array of Products {id, title, description, price, image, category}
 */
export const fetchProducts = async (): Promise<IProducts> => {
  try {
    const result = await axiosGetRequest('https://fakestoreapi.com/products');
    if (result && result.data) {
      return result.data as IProducts;
    } else {
      throw new Error('No data received');
    }
  } catch (error) {
    console.error('Fetch Categories Error: ', error);
    throw error;
  }
};

// search key for Search items
const SEARCH_KEY = 'searchKey';

/**
 * Add a new Search term to the cache.
 * @param term - The search term to add.
 */
export const addSearchTerm = async (term: string) => {
  try {
    const storedHistory = await AsyncStorage.getItem(SEARCH_KEY);
    const history = storedHistory ? JSON.parse(storedHistory) : [];

    const updatedHistory = [
      term,
      ...history.filter((item: string) => item !== term),
    ].slice(0, 10);

    await AsyncStorage.setItem(SEARCH_KEY, JSON.stringify(updatedHistory));
  } catch (error) {
    console.error('Error adding search term:', error);
  }
};

/**
 * Get all stored search terms.
 * @returns {Promise<string[]>} - Array of previously searched terms.
 */
export const getSearchHistory = async (): Promise<string[]> => {
  try {
    const storedHistory = await AsyncStorage.getItem(SEARCH_KEY);
    return storedHistory ? JSON.parse(storedHistory) : [];
  } catch (error) {
    console.error('Error retrieving search history:', error);
    return [];
  }
};

/**
 * Clear all search history.
 */
export const clearSearchHistory = async () => {
  try {
    await AsyncStorage.removeItem(SEARCH_KEY);
  } catch (error) {
    console.error('Error clearing search history:', error);
  }
};
