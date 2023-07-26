import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Modal from 'react-native-modal';
import Title from '../components/text/title';
import Table from '../components/table';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

const Titles = ['Liste complète', 'Liste de Romain', 'Liste de Marianne', 'Liste de Dominique', 'Suppression définitive'];

const FullApp = () => {
  useEffect(() => {
  }, []);

  const [selectedList, setSelectedList] = useState(0);
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [pickerFocused, setPickerFocused] = useState(false);

  const handleSelectedList = (list) => {
    setSelectedList(list);
    setMenuModalVisible(false);
  }

  return (
    <View>
      <View style={styles.container}>
        <Title text={Titles[selectedList]} />
        <View style={styles.containerList}>
          <Table />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.fab} onPress={() => setMenuModalVisible(true)}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/menu.png')}
          />
        </TouchableOpacity>
      </View>

      <Modal visible={menuModalVisible} animationType="slide" transparent={false}>
        <View style={styles.modalContainer}>
          <View>
            <Title text="Menu" />
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              onFocus={() => setPickerFocused(true)}
              onBlur={() => setPickerFocused(false)}
              style={styles.picker}
              selectedValue={selectedList}
              onValueChange={(itemValue) => handleSelectedList(itemValue)}
            >
            <Picker.Item
              value=""
              label="..."
              enabled={!pickerFocused}
              />
              <Picker.Item label="Liste complète" value={0} />
              <Picker.Item label="Liste de Romain" value={1} />
              <Picker.Item label="Liste de Marianne" value={2} />
              <Picker.Item label="Liste de Dominique" value={3} />
              <Picker.Item label="Supprimer toute les listes" value={4} />
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "93%",
    overflow: 'hidden'

  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'transparent',
  },
  fab: {
     position: 'absolute',
     backgroundColor: 'white',
     borderRadius: 30,
     width: 60,
     height: 60,
     alignItems: 'center',
     justifyContent: 'center',
     right: 16,
     bottom: 0,
     elevation: 5,
  },
  fabText: {
   fontSize: 24,
   color: 'grey',
   fontWeight: 'bold',
  },
   tinyLogo: {
    width: 50,
    height: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: "100%",
    height: "100%"
  },
  pickerContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,

  },
  picker: {
    width: 200,
  },
  containerList: {
    width: '95%',
  }
});

export default FullApp;
