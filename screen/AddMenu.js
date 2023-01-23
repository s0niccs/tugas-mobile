import { View, ScrollView } from "react-native";
import React, { Component } from "react";
import {
  Judul,
  Inputan,
  InputPassword,
  Button,
  BlankButton,
  RegText,
} from "../comp";
import { db } from "../handler/config";
import { doc, setDoc } from "firebase/firestore";

export class AddMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      desc:"",
      price:"",
      url:"",
      nama:"",
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }
  SignUpFunc = () => {
    //local variable untuk funngsi SignUpFunc
    var Nama = this.state.nama;
    var ID = this.state.id;
    var URL = this.state.url;
    var Price = this.state.price;
    var Desc = this.state.desc;
      //membuat dokumen baru di firestore
      setDoc(doc(db, "FoodMenu", ID), {
        id: ID,
        nama: Nama,
        desc: Desc,
        price:Price,
        url : URL,
      })
        .then(() => {
          alert("Menu added!");
        })
        .catch((error) => {
          console.log(error);
        });
  }
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "white",
          alignContent: "center",
        }}
      >
        {/* membuat judul page */}
        <Judul teks="Daftar" />
        {/* membuat text input untuk email */}
        <Inputan
          teks="ID"
          onChangeText={(id) => this.setState({ id })}
        />
        {/* membuat text input untuk nama */}
        <Inputan teks="Nama" onChangeText={(nama) => this.setState({ nama })} />
        <Inputan teks="Desc" onChangeText={(desc) => this.setState({ desc })} />
        <Inputan teks="Price" onChangeText={(price) => this.setState({ price })} />
        <Inputan teks="url" onChangeText={(url) => this.setState({ url })} />
        {/* membuat buttton daftar untuk memanggil fungsi SignUpFunc */}
        <Button
          teks="Daftar"
          onPress={() => {
            this.SignUpFunc();
          }}
        />
      </ScrollView>
    );
  }
}


export default AddMenu;
