import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export class Test extends Component {
  render() {
    return (
      <View>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{
            width:100,
            height:100
        }} />   
      </View>
    )
  }
}

export default Test