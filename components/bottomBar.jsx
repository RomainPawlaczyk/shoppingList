import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const BottomBar = ({ handleOpenMenu }) => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.button} onPress={handleOpenMenu}>
        <View style={styles.fab} >
          <Image
            style={styles.tinyLogo}
            source={require('../assets/menu.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%'
  },
  button: {
    backgroundColor: 'lightgray',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
    height: 70,

  },
  fab: {
    backgroundColor: 'lightgray',
    borderRadius: 30,
    width: 50,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
   tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default BottomBar;
