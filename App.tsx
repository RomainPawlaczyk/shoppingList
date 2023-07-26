import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Title from './components/text/title';
import FullApp from './pages/fullApp';

const UserInformation = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const [userModalVisible, setUserModalVisible] = useState(false);
  const [pickerFocused, setPickerFocused] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const _user = await get('user');
      if (_user) {
        //// TODO: if mom display mom interface, else display full interface
      } else {
        handleUserModal();
      }
    } catch (error) {
      console.log('Error retrieving data:', error);
    }
  };

  const save = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error('Err');
    }
  };

  const get = async (key) => {
    try {
      let value = await AsyncStorage.getItem(key);
      if (value) {
        return value;
      }
    } catch (error) {
      console.error('Err 1', error);
      return null;
    }
  };

  const handleUserModal = () => {
    setUserModalVisible(!userModalVisible);
  };

  const handleSelectedUser = (user) => {
    setSelectedUser(user);
    handleUserModal();
  }

  return (
    <View style={styles.container}>
    {
      selectedUser === "" ? null :
      <FullApp />


    }

      <Modal visible={userModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View>
            <Title text="Qui etes vous ?" />
          </View>
          <View style={styles.pickerContainer}>
            <Picker
              onFocus={() => setPickerFocused(true)}
              onBlur={() => setPickerFocused(false)}
              style={styles.picker}
              selectedValue={selectedUser}
              onValueChange={(itemValue) => handleSelectedUser(itemValue)}
            >
            <Picker.Item
              value=""
              label="..."
              enabled={!pickerFocused}
              />
              <Picker.Item label="Romain" value="Romain" />
              <Picker.Item label="Marianne" value="Marianne" />
              <Picker.Item label="Dominique" value="Dominique" />
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

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
  linearGradient: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 50,
    width: 180,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor: 'transparent',
  },
  validateButtonView: {
    marginTop: 50,
    padding: 20,
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
    width: 220,

  }
});

export default UserInformation;
