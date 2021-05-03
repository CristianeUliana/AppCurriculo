import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const Card = (props) => {
 return(
    <View style={styles.card}>
    <View>
      <Text style={styles.cardHeaderText}>Experiência Profissional</Text>
    </View>
    <View>
      <Text style={styles.cardContentText}>{props.empresa}</Text>
      <Text style={styles.cardContentText}>{props.cargo}</Text>
      <Text style={styles.cardContentText}>{props.periodo}</Text>
    </View>
  </View>
 )
}

export default Card