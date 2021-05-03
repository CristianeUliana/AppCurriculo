import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const Card = () => {
 return(
    <View style={styles.card}>
    <View>
      <Text style={styles.cardHeaderText}>Experiência Profissional</Text>
    </View>
    <View>
      <Text style={styles.cardContentText}>everis</Text>
      <Text style={styles.cardContentText}>Desenvolvimento Mobile</Text>
      <Text style={styles.cardContentText}>mar de 2021 - o momento</Text>
    </View>
  </View>
 )
    
}

export default Card