import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, Text, ActivityIndicator} from 'react-native';
import SearchBar from '../../components/search-bar';
import CategoriesCard from '../../components/categories-card';
import ProductCard from '../../components/product-card';
import SearchHistory from '../../components/search-history';

import {useQuery} from '@tanstack/react-query';
import {
  fetchCategories,
  fetchProducts,
  getSearchHistory,
  addSearchTerm,
  clearSearchHistory,
} from '../../utils/api';
import {filterCategories, filterProducts} from '../../common/helper';
import {ICategories, IProducts} from '../../common/types';
import {debounce} from 'lodash';

const SearchScreen = () => {
  const {
    data: categoryData,
    isLoading: loadingCategories,
    error: categoryError,
  } = useQuery<ICategories>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  const {
    data: productData,
    isLoading: loadingProducts,
    error: productError,
  } = useQuery<IProducts>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const [query, setQuery] = useState<string>('');
  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const history = await getSearchHistory();
      setQueryHistory(history);
    };
    fetchHistory();
  }, []);

  const handleSearch = debounce(async () => {
    if (query.trim() === '') return;

    await addSearchTerm(query);

    const updatedHistory = await getSearchHistory();
    setQueryHistory(updatedHistory);

    setQuery('');
  }, 500);

  const handleClearHistory = async () => {
    await clearSearchHistory();
    setQueryHistory([]);
  };

  const handleSelectHistoryItem = (term: string) => {
    setQuery(term);
  };

  const filteredCategories = filterCategories(categoryData || [], query);
  const filteredProducts = filterProducts(productData || [], query);

  if (loadingCategories || loadingProducts) {
    return <ActivityIndicator size={'large'} style={styles.indicator} />;
  }

  if (categoryError || productError) {
    return (
      <Text>
        An error occurred:
        {categoryError instanceof Error
          ? categoryError.message
          : 'Error fetching categories'}
        {productError instanceof Error
          ? productError.message
          : 'Error fetching products'}
      </Text>
    );
  }

  return (
    <ScrollView style={styles.main}>
      <SearchBar
        placeholder="Search for items"
        search={{query, setQuery}}
        value={query}
        onChangeText={setQuery}
        style={{marginHorizontal: 10}}
        onSubmitEditing={handleSearch}
      />
      <SearchHistory
        searchData={queryHistory}
        selectQuery={handleSelectHistoryItem}
        clearQuery={handleClearHistory}
      />
      <CategoriesCard data={filteredCategories} />
      <ProductCard data={filteredProducts} />
    </ScrollView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  indicator: {
    marginTop: '40%',
  },
});
