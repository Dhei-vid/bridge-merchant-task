import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface ISearchCardItem {
  title: string;
  index: number;
}

const images: Record<number, any> = {
  0: require('../assets/vegetable.png'),
  1: require('../assets/cooking.png'),
  2: require('../assets/meat.png'),
  3: require('../assets/snacks.png'),
};

const BGColor: Record<number, string> = {
  0: 'rgba(83, 177, 117, 0.1)',
  1: 'rgba(248, 164, 76, 0.1)',
  2: 'rgba(247, 165, 147, 0.25)',
  3: 'rgba(211, 176, 224, 0.25)',
};

const borderColor: Record<number, string> = {
  0: 'rgba(83, 177, 117, 0.25)',
  1: 'rgba(248, 164, 76, 0.7)',
  2: 'rgba(247, 165, 147, 1)',
  3: 'rgba(211, 176, 224, 1)',
};

const SearchCardItem: FC<ISearchCardItem> = ({title, index}) => {
  const imageSource = images[index] || null;
  const BGcolorSource = BGColor[index] || '#ccc';
  const borderColorSource = borderColor[index] || '#ccc';

  return (
    <TouchableOpacity
      style={[
        style.main,
        {borderColor: borderColorSource, backgroundColor: BGcolorSource},
      ]}>
      <View style={[style.container]}>
        {imageSource && <Image source={imageSource} />}
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCardItem;

const style = StyleSheet.create({
  main: {
    justifyContent: 'center',
    width: '45%',
    height: 180,
    borderWidth: 1,
    borderRadius: 18,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
