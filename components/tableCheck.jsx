import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TableHeader = () => {

  return (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.header, styles.leftAlign]}>Trier</Text>
      <Text style={[styles.cell, styles.header]}></Text>
      <Text style={[styles.cell, styles.header]}></Text>
    </View>
  );
};

const TableRow = ({ id, user, object, check, handleCheck }) => {

  return (
    <View style={styles.row}>
      <Text style={styles.cell, styles.leftAlign, styles.leftCell}>{user}</Text>
      <Text style={check ? styles.cell : styles.checked} onPress={() => handleCheck(id)}>{object}</Text>
    </View>
  );
};

const Table = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData([
      { id: '1', user: 'D', object: 'Salade', check: true },
      { id: '2', user: 'D', object: 'Tomates cerises', check: false },
      { id: '3', user: 'D', object: 'Lait', check: true },
      { id: '4', user: 'D', object: 'mille feuilles milka chocolat blanc et noir', check: true },
      { id: '5', user: 'M', object: 'B', check: false },
      { id: '6', user: 'M', object: 'C', check: true },
      { id: '7', user: 'M', object: 'A', check: true },
      { id: '8', user: 'M', object: 'B', check: false },
      { id: '9', user: 'M', object: 'C', check: true },
      { id: '10', user: 'M', object: 'A', check: true },
      { id: '12', user: 'M', object: 'B', check: false },
      { id: '13', user: 'R', object: 'C', check: true },
      { id: '11', user: 'R', object: 'A', check: true },
      { id: '32', user: 'R', object: 'B', check: false },
      { id: '33', user: 'R', object: 'C', check: true },
    ]);
  }, []);

  const handleCheck = (id) => {
    setData((prevData) => {
      return prevData.map((item) => {
        if (item.id === id) {
          return { ...item, check: !item.check };
        }
        return item;
      });
    });
  };

  return (
    <View >
      <TableHeader />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TableRow id={item.id} user={item.user} object={item.object} check={item.check} handleCheck={handleCheck}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
    color: "grey"
  },
  header: {
    fontWeight: 'bold',
  },
  rightAlign: {
    textAlign: 'right',
  },
  leftAlign: {
    textAlign: 'left',
  },
  leftCell: {
    minWidth: 40
  },
  checked: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: "lightgray"
  }
});

export default Table;
