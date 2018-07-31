import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  AsyncStorage,
  Button
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import firebase from 'firebase'//đã cài trên cmd

type Props = {}
export default class LoginScreen extends Component<Props> {

  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
          <TouchableWithoutFeedback style={styles.container} 
                            onPress={Keyboard.dismiss}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>My kindergarten</Text>
                {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
                <TextInput style={styles.input} 
                  placeholder="Enter username or email"
                  placeholderTextColor="#000"
                  keyboardType='email-address'
                  returnKeyType='next'
                  onChangeText={ (email) => this.setstate({username}) }
                  value={this.state.username}
                />

                <TextInput style={styles.input1}
                  placeholder="Enter password"
                  placeholderTextColor='#000'
                  returnKeyType='go'
                  secureTextEntry
                  //autoCorrect={false}
                  //ref={"txtPassword"}
                  onChangeText={ (password) => this.setstate({password}) }
                  value={this.state.password}
                />
                
          
                <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> 
                <Button
                  title="Don't have an account? Sign Up"
                  onPress={() => this.props.navigation.navigate('SignUp')}
                />
                  
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cbef84',
    flex:1,
    flexDirection: 'column'
    
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
    opacity: 0.9,
    color: '#fc0c55'
  },
  infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    top: 130,
    height: 300,
    padding: 20,
    // backgroundColor: 'red'
  },
  input: {
    height: 50,
    borderColor: '#553afa',
    color: 'blue',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    opacity: 0.7
  },
  input1: {
    marginTop: 10,
    height: 50,
    borderColor: '#553afa',
    color: 'blue',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    opacity: 0.7
  },
  buttonContainer: {
    backgroundColor: '#553afa',
    paddingVertical: 13,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#553afa'    
  },
  buttonText: {
    textAlign: 'center',
    color :'#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
})