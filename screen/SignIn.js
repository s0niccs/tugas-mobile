import { View, StyleSheet, Text } from "react-native";
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
import { doc, getDoc } from "firebase/firestore";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }
  SignInFunc = () => {
    var Email = this.state.email;
    var Password = this.state.password;
    getDoc(doc(db, "user", Email))
      .then((docData) => {
        // Data saved successfully!
        if (docData.exists()) {
          //console.log(docData.data());
          if (
            docData.data().email == Email &&
            docData.data().password == Password
          ) {
            alert("Berhasil Login");
            this.props.navigation.reset({
              index: 0,
              routes: [{ name: "Maps" }],
            });
          } else {
            alert("E-mail / Password Anda Salah!");
          }
        } else {
          alert("E-mail / Password Anda Salah!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Judul teks="Masuk" />
        <Inputan
          teks="E-mail"
          onChangeText={(email) => this.setState({ email })}
        />
        <InputPassword
          teks="Password"
          onChangeText={(password) => this.setState({ password })}
        />
        <Button teks="Masuk" onPress={() => this.SignInFunc()} />
        <RegText teks="atau" />
        <BlankButton
          teks="Daftar"
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "center",
  },
  text: {
    fontSize: 16,
    alignItems: "center",
    alignVertical: "center",
  },
});
