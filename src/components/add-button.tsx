import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const AddButton = () => (
  <TouchableOpacity style={styles.btnContainer}>
    <Icon style={styles.addIcon} name={'plus'} size={25} color={'#fff'} />
  </TouchableOpacity>
);

export default AddButton;

const styles = StyleSheet.create({
  btnContainer: {
    margin: 5,
    backgroundColor: '#087319',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 15,
    height: 45,
    width: 45,
  },
  addIcon: {
    textAlign: 'center',
  },
});
