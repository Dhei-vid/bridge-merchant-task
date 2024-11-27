import {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

import {IProducts} from '../common/types';
import ProductCardItem from './product-card-item';

interface IProductCard {
  data: IProducts | undefined;
}

const ProductCard: FC<IProductCard> = ({data}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {data?.map(({id, title, price, description, image}) => {
          return (
            <ProductCardItem
              key={id}
              title={title}
              price={price}
              description={description}
              image={image}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default ProductCard;

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
