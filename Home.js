import { StatusBar, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Pesan from "../assets/pesanmakan.jpg";
import Maps from "../assets/favicon.png";
import about from "../assets/favicon.png";
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = ({

    });
  }
  render() {
    return (
      <View style={{flex: 1, padding:10, flexDirection:"row", flexWrap:"wrap"}}>
        <StatusBar backgroundColor="red" /> 
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Menu")} style={{padding:10,backgroundColor:"crimson", width:"45%", height:200, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={Pesan} style={{width: "90%", height:"70%", flex:1,borderRadius :33}} resizeMode="cover"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700", color:"#fff"}}>Pesan</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Menu")} style={{padding:10,backgroundColor:"crimson", width:"45%", height:200, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={Maps} style={{width: "90%", height:"70%", flex:1,borderRadius :33}} resizeMode="cover"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700", color:"#fff"}}>Riwayat</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Menu")} style={{padding:10,backgroundColor:"crimson", width:"45%", height:200, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={about} style={{width: "90%", height:"70%", flex:1}} resizeMode="contain"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700", color:"#fff"}}>Maps</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Menu")} style={{padding:10,backgroundColor:"crimson", width:"45%", height:200, margin: 8, justifyContent:"center", alignItems:"center", borderWidth:4, borderColor:"yellow", borderRadius:10, elevation:10}} >
          <Image source={about} style={{width: "90%", height:"70%", flex:1}} resizeMode="contain"/>
          <View style={{textAlign:"center", flex:.2, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:20, fontWeight:"700", color:"#fff"}}>About</Text>
          </View>
        </TouchableOpacity>
    
      </View>
    )
  }
}
