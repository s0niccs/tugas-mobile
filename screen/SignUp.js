import { View } from "react-native";
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

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      email: "",
      password: "",
      confirmpass: "",
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }
  SignUpFunc = () => {
    //local variable untuk funngsi SignUpFunc
    var Nama = this.state.nama;
    var Email = this.state.email;
    var Password = this.state.password;
    var ConfirmPw = this.state.confirmpass;
    //cek inputan apakah sudah terisi
    if (
      Email.length == 0 ||
      Password.length == 0 ||
      ConfirmPw.length == 0 ||
      Nama.length == 0
    ) {
      alert("Required Field Is Missing!!!");
    }
    // validasi password
    else if (Password.length < 4) {
      alert("Minimum 04 characters required!!!");
    } else if (/[ ]/.test(Password)) {
      alert("Don't include space in password!!!");
    } else if (Password !== ConfirmPw) {
      alert("Password doesn't match!!!");
    } else {
      //membuat dokumen baru di firestore
      setDoc(doc(db, "user", Email), {
        email: Email,
        nama: Nama,
        password: Password,
      })
        .then(() => {
          alert("User added!");
          this.props.navigation.navigate("SignIn");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    return (
      <View
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
          teks="Email"
          onChangeText={(email) => this.setState({ email })}
        />
        {/* membuat text input untuk nama */}
        <Inputan teks="Nama" onChangeText={(nama) => this.setState({ nama })} />
        {/* membuat text input untuk password */}
        <InputPassword
          teks="Password"
          onChangeText={(password) => this.setState({ password })}
        />
        {/* membuat text input untuk confirm password */}
        <InputPassword
          teks="Confirm Password"
          onChangeText={(confirmpass) => this.setState({ confirmpass })}
        ></InputPassword>
        {/* membuat buttton daftar untuk memanggil fungsi SignUpFunc */}
        <Button
          teks="Daftar"
          onPress={() => {
            this.SignUpFunc();
          }}
        />
        <RegText teks="atau" />
        {/* Button untuk kembali ke halaman SignIn */}
        <BlankButton
          teks="Masuk"
          onPress={() => this.props.navigation.navigate("SignIn")}
        />
      </View>
    );
  }
}

export default SignUp;
