import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

const GradientText = (props) => {
  return (
     <View style={styles.textView}>
       <Text style={styles.text}>
        {props.text}
       </Text>
     </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontSize: 22,
  },
  textView: {
    marginBottom: 30
  }
});

export default GradientText;
