import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TableHeader = () => {
  return (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.header]}>Utilisateur</Text>
      <Text style={[styles.cell, styles.header]}>Objet</Text>
      <Text style={[styles.cell, styles.header]}>Check</Text>
    </View>
  );
};

const TableRow = ({ user, object, check }) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell, styles.rightAlign}>{user}</Text>
      <Text style={styles.cell}>{object}</Text>
      <Text style={styles.cell}>{check ? 'Oui' : 'Non'}</Text>
    </View>
  );
};

const Table = () => {
  const [data, setData] = useState([
    { id: '1', user: 'D', object: 'A', check: true },
    { id: '2', user: 'D', object: 'B', check: false },
    { id: '3', user: 'D', object: 'C', check: true },
    { id: '4', user: 'D', object: 'A', check: true },
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

  return (
    <View >
      <TableHeader />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TableRow user={item.user} object={item.object} check={item.check} />
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
  },
  header: {
    fontWeight: 'bold',
  },
  rightAlign: {
    textAlign: 'right', // Appliquer textAlign: 'right' pour centrer à droite
  },
});

export default Table;
