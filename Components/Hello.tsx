import { StyleSheet,View, Text } from 'react-native'
import React from 'react'

const Hello = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>        Hola Mundo                  </Text>
      <Text style={styles.text2}>💛💙❤️ Hola Mund-ial 💛💙❤️</Text>
      <Text style={styles.text3}>        Hola Mundo                  </Text>
    </View>
  )
}

const styles = StyleSheet.create(
{
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: "10%",
    width: "100%",
    
  },
  text2:{
    fontSize: 25,
    color: "white",
    backgroundColor: "#0000FF",
  },
  text1:{
    fontSize: 30,
    color: "yellow",
    backgroundColor: "#FFFF00",
  },
  text3:{
    fontSize: 30,
    color: "red",
    backgroundColor: "#FF0000",
  },
  
}
)

export default Hello