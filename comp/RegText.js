import { View, Text } from 'react-native'
import React from 'react'

const RegText = (props) => {
  return (
    <View style={{
        alignContent:'center',
        alignItems:'center',
    }}>
      <Text style={{
        fontSize: 16,
        alignItems: "center",
        alignVertical: "center",
      }}>{props.teks}</Text>
    </View>
  )
}

export default RegText