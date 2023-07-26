import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DeleteConfirmation = (props) => {
  const handleDelete = () => {
    console.log('Suppression définitive effectuée !');
  };

  const handleCancel = () => {
    props.cancel();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Êtes-vous sûr de vouloir supprimer les listes ?
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
          <Text style={styles.buttonText}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleDelete}>
          <Text style={[styles.buttonText, styles.confirmButtonText]}>Valider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    width: "auto",
    height: 100,
    marginTop: 250
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    height: 50,
    width: "auto"
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: 'red',
  },
  confirmButtonText: {
    fontWeight: 'bold',
  },
});

export default DeleteConfirmation;
