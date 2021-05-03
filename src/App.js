
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
Icon.loadFont()
import foto from './foto.png';
import Card from './components/Card'




const App = () => {

function handleRedeSocial(redeSocial) {
  switch(redeSocial) {
    case 'linkedin':
      Alert.alert('Meu Linkedin','https://linkedin.com/in/cristianeuliana')
    break
    case 'github':
      Alert.alert('Meu Github','https://github.com/cristianeuliana')
    break
    case 'facebook':
      Alert.alert('Meu Facebook','https://facebook.com/cristianeuliana')
    break
  }
}

  return (
    <SafeAreaView style={styles.page}>
      <ScrollView>

        <View style={styles.cabecalho}>
          <Image style={styles.foto} source={foto} />
          <Text style={styles.nome}>CRISTIANE GONÇALVES ULIANA</Text>
          <Text style={styles.funcao}>Desenvolvedora Mobile</Text>
          <View style={styles.redesSociais}>
            <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
              <Icon name="github" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')} >
              <Icon name="linkedin" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> handleRedeSocial('facebook')}>
              <Icon name="facebook" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <Card />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  foto: {
    width: 180,
    height: 180,
    borderRadius: 125
  },
  nome: {
    fontSize: 22 ,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  funcao: {
    fontSize: 15,
    color: '#939393',
    marginBottom: 10,
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 10,
    marginBottom:10
  },
});

export default App;
