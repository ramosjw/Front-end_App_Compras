import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>MyShopping</Text>
      <Text style={styles.text2}>Monte sua lista de compra para te ajudar nas compras!</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
      />

            <TextInput
        style={styles.input}
        placeholder="Senha"
      />

     <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Entrar </Text>
     </TouchableOpacity>

     <Text style={styles.text3}>Recuperar senha          Criar minha conta</Text>

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
  text1: {
    color: '#8481df',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 3,
  },
  text2: {
    color: '#8481df',
    fontWeight: 'feather bold',
    marginBottom: 15,
  },
  text3:{
    marginTop: 15,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 7,
    width: 350,
    marginTop: 8,
    paddingHorizontal: 16,
    color: '#b4b4b4',
  },
  button: {
    backgroundColor: '#2ab76b',
    borderRadius: 15,
    width: 350,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'feather bold',
    textAlign: 'center',
  },
});
