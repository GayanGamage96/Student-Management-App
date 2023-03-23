import { SafeAreaView, StyleSheet, Text, View, Image, TextInput,TouchableOpacity, ScrollView, Button, Alert} from 'react-native'
import React ,{useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/AntDesign'
import axios from 'axios';


const Register = ({navigation}) => {
   const [email, setEmail] = useState("")
   

   

  return (
    <SafeAreaView style={styles.container}>
         <ScrollView>
      <View style={{marginBottom:20,justifyContent:'center',alignItems:'center'}}>
        <Image style={{ width: 100, height:100}} source={require('../assets/images/reglogo.png')} />
      </View>

      <View style={{ paddingHorizontal: 25}}>

        <Text style={styles.logintxt}>Create Your Account</Text>

        <View style={styles.txtinput}>
          <FontAwesome name='user' size={20} color="#666" style={{paddingTop:5,marginRight:5}} />
          <TextInput 
          placeholder='User ID number' 
          style={{flex:1,paddingVertical:0}}
          />
        </View>


        <View style={styles.txtinput}>
        <FontAwesome name='user' size={20} color="#666" style={{paddingTop:5,marginRight:5}} />
          <TextInput 
          placeholder='User Name' 
          style={{flex:1,paddingVertical:0}}
          
         />
          
        </View>


        <View style={styles.txtinput}>
        <MaterialIcons name='email' size={20} color="#666" style={{paddingTop:5,marginRight:5}} />
          <TextInput 
          placeholder='Email Address' 
          style={{flex:1,paddingVertical:0}}
          keyboardType="email-address"
         
           />
            </View>
            <View style={styles.txtinput}>
          <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={{paddingTop:5,marginRight:5}} />
          <TextInput 
          placeholder='Password' 
          style={{flex:1,paddingVertical:0}}
          secureTextEntry={true}
        
           />
            </View>
           

          
       

        <TouchableOpacity
        
        style={{
          backgroundColor:'#AD40AF',
          padding:12,
          borderRadius:16,
          marginBottom:30,
          marginTop:20
        }}>
          <Text style={{textAlign:'center',fontWeight:'700',fontSize:18,color:'white'}}>Register</Text>
        </TouchableOpacity>
       
<View style={{flexDirection:'row',justifyContent:'center',marginBottom:30}}>
        <Text style={{color:'#AD40AF',fontWeight:'700'}}>Already Registered?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")} >
          <Text style={{color:'#AD40AF',fontWeight:'700'}}>Login</Text>
        </TouchableOpacity>
        </View>
      </View>

      


      </ScrollView>
    </SafeAreaView>
  )
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginVertical:10

   

  },
  logintxt: {
    fontSize: 28,
    fontWeight: 500,
    color: '#240046',
    marginBottom: 30,
    textAlign:'center'
  },
  txtinput:{
    
    flexDirection:'row',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    paddingBottom:8,
    marginBottom:25

    


  }
})