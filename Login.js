import React, {useState} from 'react';
import Fetch from './fetch';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';



export default function Login({navigation}) {
  const [name, setName] = useState(''); //Stores username
  const [password, setPassword] = useState(''); //Stores Password
  // const realname="Kamesh";
  // const realPassword="12345";
  var token="";
  var status;
 
 
 async function FetchData() {
  //const{name,password}=route.params;
  
  await fetch('https://airport-vehicle-management-backend-urtjok3rza-wl.a.run.app/authenticate', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: name,
      password: password,
    })
  })
  .then((response) =>{ response.json().then((result)=>{
    
    token=result.token;
    console.log(token);
    status=response.status;
    localStorage.setItem('token',JSON.stringify({token:result.token}))
  })})
  
  .catch((error) => {
  console.error(error);
   });
  
 
  //console.log(realname);
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

  function isValid(name,password){
    console.log(name+" "+password);
    //console.log(realname+" "+realPassword);
   FetchData();
   sleep(2000).then(() => { console.log("Waiting!");
   if(token!="")
   {
    navigation.navigate('Fetch');
   }
    if(status!=200)
    {
      alert('Invalid Username Or Password');
    } });
     
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText1}>Welcome Back!</Text>
        <Text style={styles.welcomeText2}>please sign in to your account</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputBtn}>
          <TextInput
            onChangeText={value => setName(value)} //sets the value
            placeholder="Username" //It's Like an hint
            placeholderTextColor="#808e9b" //Specify the Color for placeholder
            textContentType="username" //Check the entry accordingly
          />
        </View>
        <View style={styles.inputBtn}>
          <TextInput
            onChangeText={value => setPassword(value)}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#808e9b"
            textContentType="password"
          />
        </View>
      </View>
      
      <View style={styles.signContainer}>
        <TouchableOpacity
          style={[styles.signin, styles.signin1]}
          onPress={() => {isValid(name,password)}}>
          <Text style={styles.signinInput1}>Sign In</Text>
        </TouchableOpacity>
        
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, //Screen Ratio
    justifyContent: 'center', //Places the whole content to center
    alignItems: 'center', //Places the content to the middle
    backgroundColor: 'black',
  },
  welcomeContainer: {
    flex: 0.25,
    justifyContent: 'center',
  },
  welcomeText1: {
    fontSize: 30,
    color: 'white', //Specify Text Color
    alignSelf: 'center', //Places the text to center
  },
  welcomeText2: {
    fontSize: 20,
    color: '#808e9b',
  },
  inputContainer: {
    flex: 0.25,
    width: '100%',
    height: '100%',
  },
  inputBtn: {
    backgroundColor: '#333',
    borderRadius: 100,
    paddingHorizontal: 20,
    marginTop: 30,
    marginHorizontal: 20,
    height: 50
    
  },
  ForgetPassword: {
    alignSelf: 'flex-end',
    paddingEnd: 20,
  },
  ForgetPasswordText: {
    color: '#808e9b',
  },
  signContainer: {
    flex: 0.5,
    justifyContent: 'center',
    width: '100%',
  },
  signin: {
    height: 60,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    marginHorizontal: 20,
    color: '#808e9b',
  },
  signin1: {
    backgroundColor: '#528AAE',
  },
  signinInput1: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: 20,
    fontWeight: '400',
  },
  signin2: {
    backgroundColor: '#CDEAF7',
  },
  signinInput2: {
    color: 'black',
    alignSelf: 'center',
    paddingTop: 10,
  },
  signin3: {
    backgroundColor: '#2E5984',
  },
  signinInput3: {
    color: 'white',
    alignSelf: 'center',
    paddingTop: 10,
  },
  signupContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  signup1: {
    color: '#808e9b',
  },
  signup2: {
    color: '#2E5984',
  },
});
