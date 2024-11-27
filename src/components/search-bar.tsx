import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleProp,
  TextInput,
  TextInputProps,
  Text,
} from 'react-native';
import {Dispatch, SetStateAction, FC} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import SearchMeterIcon from '../assets/icons/search_meter.svg';

interface ISearchBar {
  placeholder: string;
  search: {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
  };
  style?: StyleProp<ViewStyle>;
}

export type ISearchBarTypes = ISearchBar & TextInputProps;

const SearchBar: FC<ISearchBarTypes> = ({
  placeholder,
  search,
  style,
  ...rest
}) => {
  const {query, setQuery} = search;

  return (
    <View style={[styles.main, style]}>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <View style={styles.searchBtn}>
            <Icon name={'search'} size={25} color={'#FF882E70'} />
          </View>
          <TextInput
            {...rest}
            underlineColorAndroid="transparent"
            selectionColor={'#000'}
            placeholder={placeholder}
            cursorColor={'#FF882E70'}
            placeholderTextColor={'#FF882E70'}
            style={styles.searchInput}
            onChangeText={setQuery}
            value={query}
          />
        </View>

        <TouchableOpacity>
          {/* <Text>Try me</Text> */}
          {/* <SearchMeterIcon width={50} height={50} /> */}
          {/* <Image source={SearchMeterIcon}> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 100,
    shadowColor: 'gray',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  searchInput: {
    height: 51,
    paddingVertical: 10,
    borderColor: '#EFEFEF',
    backgroundColor: '#FCFCFD',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 0,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: '70%',
    color: '#FF882E70',
  },
  searchBtn: {
    height: 51,
    paddingLeft: 15,
    paddingRight: 5,
    borderColor: '#EFEFEF',
    backgroundColor: '#FCFCFD',
    justifyContent: 'center',
    alignContent: 'center',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchMeterIcon: {
    width: 50,
    height: 50,
  },
});
