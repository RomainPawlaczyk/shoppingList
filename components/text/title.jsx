import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const GradientText = (props) => {
  return (
    <View>
     <View style={styles.textView}>
       <Text style={styles.text}>
        {props.text}
       </Text>
     </View>
     <LinearGradient
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.0, y: 1.0 }}
        locations={[0.0, 1.0]}
        colors={['#ffffff40', '#fffffff5']} //<-- last 2 chars from color control the opacity
        useViewFrame={false}
        style={styles.gradient}
      />
     </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 22,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  textView: {
    marginBottom: 30
  }
});

export default GradientText;
