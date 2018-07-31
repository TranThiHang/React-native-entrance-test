import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import firebase from 'firebase'
/*
Tạo màn hình Home tạm thời
 */

type Props = {}
export default class HomeScreen extends Component<Props> {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})