import {FC} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import SearchCardItem from './category-card-item';
import {ICategories} from '../common/types';

interface ICategoriesCard {
  data: ICategories | undefined;
}

const CategoriesCard: FC<ICategoriesCard> = ({data}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {data?.map((item, index) => {
          return <SearchCardItem key={index} title={item} index={index} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default CategoriesCard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginVertical: 8,
  },
  container: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
