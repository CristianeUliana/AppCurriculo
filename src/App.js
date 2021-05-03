
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
        <View style={styles.card}>
          <View>
            <Text style={styles.cardHeaderText}>Experiência Profissional</Text>
          </View>
          <View>
            <Text style={styles.cardContentText}>everis</Text>
            <Text style={styles.cardContentText}>Desenvolvimento Mobile</Text>
            <Text style={styles.cardContentText}> mar de 2021 - o momento</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardHeaderText}>Experiência Profissional</Text>
          </View>
          <View>
            <Text style={styles.cardContentText}>Nexxera</Text>
            <Text style={styles.cardContentText}>Atendente de Suporte Técnico</Text>
            <Text style={styles.cardContentText}>fev de 2019 - mai de 2019</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardHeaderText}>Experiência Profissional</Text>
          </View>
          <View>
            <Text style={styles.cardContentText}>EEB América Dutra Machado</Text>
            <Text style={styles.cardContentText}>Professora de Protuguês - ACT</Text>
            <Text style={styles.cardContentText}>fev de 2017 - ago de 2017</Text>
          </View>
        </View>
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
  card: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#939393',
    marginTop: 10,
    marginBottom:10,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  cardContentText: {
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    color: '#939393'
  },
});

export default App;
