import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AddButton from './add-button';

interface IProductCardItem {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const ProductCardItem: FC<IProductCardItem> = ({
  id,
  title,
  price,
  image,
  category,
  description,
}) => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.container]}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
          alt={`${title} image`}
        />
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={styles.descr} numberOfLines={1} ellipsizeMode="tail">
          {description}
        </Text>
        <Text style={styles.price}>₦{price}</Text>
      </View>
      <AddButton />
    </View>
  );
};

export default ProductCardItem;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    width: '45%',
    height: 'auto',
    borderWidth: 1,
    borderRadius: 18,
    borderColor: '#E2E2E2',
    overflow: 'hidden',
  },
  container: {
    padding: 10,
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descr: {
    fontSize: 14,
    fontWeight: 'light',
  },
  price: {
    color: '#FD903E',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  image: {
    width: 120,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
