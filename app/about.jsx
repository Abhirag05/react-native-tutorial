import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>about page</Text>

       <Link href="/">Go to Home Page</Link>
    </View>
   
  )
}

export default about

const styles = StyleSheet.create({
     container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:16
    },
})