import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import Title from '../components/text/title';
import TableCheck from '../components/tableCheck';
import TableList from '../components/tableList';
import Delete from '../components/delete';
import BottomBar from '../components/bottomBar';
const Titles = ['Liste complète', 'Liste de Romain', 'Liste de Marianne', 'Liste de Dom', 'Suppression définitive'];

const FullApp = () => {
  const [selectedList, setSelectedList] = useState(0);
  const [pickerFocused, setPickerFocused] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const menuData = [
    { id: 0, label: 'Liste complète' },
    { id: 1, label: 'Liste de Romain' },
    { id: 2, label: 'Liste de Marianne' },
    { id: 3, label: 'Liste de Dom' },
    { id: 4, label: 'Supprimer toute les listes' },
  ];

  const handleSelectedList = (list) => {
    setSelectedList(list);
    setMenuVisible(false);
  }

  const handleOpenMenu = () => {
    setMenuVisible(true);
  };

  const handleCloseMenu = () => {
    setMenuVisible(false);
  };

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={() => handleSelectedList(item.id)}>
      <Text style={styles.menuItemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleOverlayClick = () => {
    handleCloseMenu();
  };

  return (
    <View>
      <View style={styles.container}>
        <Title text={Titles[selectedList]} />
        <View style={styles.containerList}>
        {
            selectedList === 0 ?
            <TableCheck />
            :
            selectedList === 4 ?
            <Delete cancel={() => setSelectedList(0)}/>
            :
            <TableList />
        }
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isMenuVisible}
          onRequestClose={handleCloseMenu}
        >
          <TouchableWithoutFeedback onPress={handleOverlayClick}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>

          <View style={styles.menuContainer}>
            <FlatList
              data={menuData}
              renderItem={renderMenuItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </Modal>
      </View>
      <BottomBar handleOpenMenu={handleOpenMenu}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 0,
    height: "95%",
    paddingBottom: 230,
    overflow: 'hidden'

  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  menuContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 18,
  },

  containerList: {
    width: '100%',
  },
  bottomBarView: {
    width: "100%"
  },
});

export default FullApp;
