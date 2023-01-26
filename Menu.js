import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { db } from "../handler/config";
import { collection, getDocs } from "firebase/firestore";

export default class Menu extends Component {
  //membuat constructor class
  constructor(props) {
    super(props);
    //membuat state variable
    this.state = {
      Data: [],
      id:"",
      desc:"",
      price:"",
      url:"",
      nama:"",
    };
  }
  //function ketika class berhasil dibentuk
  componentDidMount() {
    this.getData();
  }
  //fungsi untuk mendapatkan data dari firestore
  getData = async () => {
    //membuat variable local locations berbentuk array 
    const Data = [];
    const querySnapshot = await getDocs(collection(db, "FoodMenu"));
    //untuk setiap dokumen yang ada firestore
    querySnapshot.forEach((doc) => {
      //variable local untuk menyimpan data dari firestore
      const {desc, nama, price, url} = doc.data();
      //memasukkan data kedalam array location
      Data.push({
        key: doc.id,
        nama,
        desc,
        price,
        url
      });
    });
    //memasukkan array locations lokal ke array locations yang ada distate
    this.setState({
      Data,
    });
  };
  render() {
    const { visible } = this.state;
    return (
      <View style={{ flex: 1, marginTop: 5 }}>
      {/*  membuat list dari data state array location */}
        <FlatList
          style={{ height: "100%" }}
          data={this.state.Data}
          numColumn={2}
          renderItem={({ item }) => (
            <View style={styles.container}>
                <Image source={{uri: item.url}} style={{
                    height:"100%",
                    width:"25%",
                }} />
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Order")} style={styles.innerContainer}>
                <Text style={styles.itemHeading}>{item.nama}</Text>
                <Text style={styles.itemText}>{item.desc}</Text>
                <Text style={styles.itemHeading}>Rp. {item.price}</Text>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "crimson",
    padding: 10,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    marginLeft: "5%",
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    alignItems: "flex-start",
    marginLeft: "3%",
    flexDirection: "column",
    marginRight:"3%",
    width:'75%',
    alignContent:'flex-end'
  },
  itemHeading: {
    textAlign:"justify",
    color: "white",
    fontWeight: "bold",
  },
  itemText: {
    width:"90%",
    fontWeight: "300",
    color: "white",
    textAlign:"justify"
  },
});
