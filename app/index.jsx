import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../assets/img/logo.jpg'
const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.image}/>
      <Text style={styles.title}>Home</Text>

      {/* inline styling */}
      <Text style={{ fontSize: 18,marginTop:10 }}>Reading List App</Text>

        <View style={styles.card}>
            <Text style={{ color:'white' }}>This is the second view</Text>
        </View>

    </View>
    
  )
}

export default Home
//internal styling
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
    card:{
        backgroundColor:'black',
        padding:16,
        borderRadius:8,
    },
    image:{
        marginVertical:20,
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:2,
        borderColor:'blue'
    }
})