
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont()
import foto from './foto.png';


const App = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.cabecalho}>
        <Image style={styles.foto} source={foto} />
        <Text style={styles.nome}>CRISTIANE GONÇALVES ULIANA</Text>
        <Text style={styles.funcao}>Desenvolvedora Mobile</Text>
        <View style={styles.redesSociais}>
          <Icon name="github" size={25} />
          <Icon name="linkedin" size={25} />
          <Icon name="facebook" size={25} />
        </View>
      </View>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page:{
    backgroundColor: '#E7E7E7',
    flex: 1
  },
  cabecalho:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  foto:{
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome:{
    fontSize: 22 ,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  funcao:{
    fontSize: 15,
    color: '#939393',
    marginBottom: 10,
  },
  redesSociais:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 10
  }
});

export default App;
