import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'


class SplashScreen extends Component <{}> {
  render() {
    return (
      <View style={styles.container}>
        
  			<Image style={styles.Applogo} source={require('./Images/Applogo.jpg')} />
  			 
  			<Text style={styles.welcome}>
  			  My Kindergarten
  			</Text>

		  </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cbef84',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: 'blue',
    margin: 10,
    fontWeight: 'bold',
    fontFamily: 'UTM Wedding K&T'
  },
  Applogo: {
    alignItems: 'center',
    width: 240,
    height: 210,
    marginBottom: 10,

  },
})

export default SplashScreen