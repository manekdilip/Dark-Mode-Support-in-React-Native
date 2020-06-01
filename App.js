import React from 'react';
import {View,Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import { useDarkMode } from 'react-native-dark-mode'
 
function Component() {
    const isDarkMode = useDarkMode()
    return <View style={{ backgroundColor: isDarkMode ? 'black' : 'white' }} />
}


export default class App extends React.Component{

  render(){
return(
    <View style = {styles.main}>
      <View style = {styles.container}>
        <TextInput style = {styles.input}
        placeholder = "Enter Email"
        type = 'email'>
        </TextInput>
        <TextInput
        style = {styles.input}
        placeholder = "Enter Password"
        secureTextEntry>       
        </TextInput>
        <TouchableOpacity style ={styles.btn}>
<Text>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
main:{
  height:'100%',
  width:'100%',
  backgroundColor:'gray'
},
container :{
  flex:1,
  backgroundColor:'gray',
  alignItems:'center',
  marginTop:35
},
input:{

  height:40,
  width:'90%',
  borderRadius:20,
  borderColor:'black',
  borderWidth:2,
  padding:10,
  margin:10
},
btn:{
width:200,
height:50,
backgroundColor:'blue',
textAlign:'center',
borderRadius:40,
alignItems:'center',
justifyContent:'center',
marginTop:10
}
})
