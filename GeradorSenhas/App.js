import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import {ModalPassword} from './src/components/modal';

let charset = ".+-,/*qwertyuioipçlkjhgfdsdazxcvbnmQWERTYUIOPÇLKJHGFDSAZXCVBNM0123456789"

export default function App() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){
    
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true)

  }


  return (
    <View style={styles.container}>

    <Image source={require("./src/assets/logo.png")} style = {styles.logo}/>

    <Text style={styles.title}>{size} Caracteres</Text>
    
    <View style={styles.area}>
      <Slider
      style={{ height: 50}}
      minimumValue={8}
      maximumValue={20}
      maximumTrackTintColor='#51C94F'
      minimumTrackTintColor='#ECA2A3'
      thumbTintColor='#00B1B9'
      value={size}
      onValueChange={ (value) => setSize(value.toFixed(0))}
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={generatePassword}>
      <Text style={styles.buttonText}>Gerar senha</Text>
    </TouchableOpacity>

    <Modal visible={modalVisible} animationType='fade' transparent={true}>
      <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false)}/>
    </Modal>
    
    <StatusBar style="auto" />
    </View>
  );
}









const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 15,
    marginTop: 0,
    width: 200,
    height: 200,

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
    backgroundColor: "#00B1B9",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
});
