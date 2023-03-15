import { SafeAreaView, StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'




const Login = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={{marginBottom:20}}>
        <Image style={{ width: "100%", height: 200}} source={require('../assets/images/cover.png')} />
      </View>

      <View style={{ paddingHorizontal: 25}}>

        <Text style={styles.logintxt}>Login</Text>

        <View style={styles.txtinput}>
          <MaterialIcons name='email' size={20} color="#666" style={{paddingTop:5,marginRight:5}} />
          <TextInput 
          placeholder='E-mail address' 
          style={{flex:1,paddingVertical:0}}
          keyboardType="email-address" />
        </View>

        <View style={styles.txtinput}>
          <Ionicons name='ios-lock-closed-outline' size={20} color="#666" style={{paddingTop:5,marginRight:5}} />
          <TextInput 
          placeholder='Password' 
          style={{flex:1,paddingVertical:0}}
          secureTextEntry={true}
           />

           <TouchableOpacity onPress={()=>{}}>
            <Text style={{color:'#AD40AF',fontWeight:700}}>Forgot Password?</Text>
           </TouchableOpacity>
        </View>

        <TouchableOpacity
        onPress={()=>{navigation.navigate("drawer")}}
        style={{
          backgroundColor:'#AD40AF',
          padding:12,
          borderRadius:16,
          marginBottom:30
        }}
        >
          <Text style={{textAlign:'center',fontWeight:'700',fontSize:18,color:'white'}}>Login</Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center',color:'#666',marginBottom:30}}>Or Login With..</Text>
        <TouchableOpacity style={{alignItems:'center',marginBottom:30}}>
        <Image style={{ width:24, height:24}} source={require('../assets/images/google.png')} />
        </TouchableOpacity>
<View style={{flexDirection:'row',gap:5,justifyContent:'center',marginBottom:30}}>
        <Text style={{color:'#AD40AF',fontWeight:'700'}}>New User?</Text>
        
        <TouchableOpacity onPress={()=> {navigation.navigate("Register")} }>
          <Text style={{color:'#AD40AF',fontWeight:'700'}}>Register</Text>
        </TouchableOpacity>
        </View>
      </View>



    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
   

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