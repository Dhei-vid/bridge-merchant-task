import {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ISearchHistory {
  searchData: string[];
  selectQuery: (item: string) => void;
  clearQuery: () => void;
}

const SearchHistory: FC<ISearchHistory> = ({
  searchData,
  selectQuery,
  clearQuery,
}) => {
  return (
    <View style={styles.main}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Search History</Text>
        <TouchableOpacity onPress={clearQuery}>
          <Text style={styles.clearButtonText}>clear</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        {searchData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => selectQuery(item)}>
            <Text style={styles.searchText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SearchHistory;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    gap: 4,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  clearButtonText: {
    fontSize: 16,
    color: '#FF882EC2',
  },
  searchText: {
    fontSize: 15,
    color: '#8688897A',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
});
