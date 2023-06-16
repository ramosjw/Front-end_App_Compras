import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras</Text>

      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} placeholder="Nome do Produto" />
        </View>
        <View style={styles.textInputContainer2}>
          <TextInput style={styles.textInput2} placeholder="0" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="cart" size={24} color="green" />
        </TouchableOpacity>
      </View>
      <View style={styles.rectangleContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.productText}>Café</Text>
          <Text style={styles.quantityText}>Quantidade: 3</Text>
        </View>
        <View style={styles.View}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.trashButton}>
          <Ionicons name="trash" size={24} color="red" />
        </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  view:{

  },
  rectangleContainer: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    borderRadius: 5,
  },
  rectangle: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    width: 270,
    padding: 10,

  },
  productText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#cccccc',
    marginVertical: 10,
  },
  quantityText: {
    fontSize: 14,
    color: '#666666',
  },
  backButton: {
    marginTop: -5,
  },
  trashButton: {
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },

  textInputContainer: {
    marginRight: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
    textInput: {
    height: 40,
    width: 190,
    paddingHorizontal: 10,
    color: '#cccccc',
  },
  textInputContainer2: {
    marginRight: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  inputContainer2: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  textInput2: {
    height: 40,
    width: 50,
    paddingHorizontal: 10,
    textAlign: 'center',
    color: '#cccccc',
  },
  button: {
    backgroundColor: 'transparent',
    marginLeft: 10,
  },
});
