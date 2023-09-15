import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';



export default function App() {
  const [size, setSize] = useState(10)


  return (
    <View style={styles.container}>
    <Image
    source={require("./src/assets/logo.jpg")}
    style = {styles.logo}
    />

    <Text style={styles.title}>{size} Caracteres</Text>
    
    <View style={styles.area}>
      <Slider
      style={{ height: 50}}
      minimumValue={6}
      maximumValue={20}
      maximumTrackTintColor='#ff0000'
      minimumTrackTintColor='#000'
      //thumbTintColor=''
      value={size}
      onValueChange={ (value) => setSize(value.toFixed(0))}
      />
    </View>

    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Gerar senha</Text>
    </TouchableOpacity>
    
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
   // flex: 1,
    marginBottom: 15,
    marginTop: 10,
    width: 150,
    height: 150,

  },
  title: {
    fontSize: 20,
    fontWeight:"bold",

  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 6,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});
