import { View, TextInput, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../handler/PasswordVisibility";

const InputPassword = (Props) => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder={Props.teks}
        secureTextEntry={passwordVisibility}
        onChangeText={Props.onChangeText}
      />
      <Pressable onPress={handlePasswordVisibility}>
        <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
      </Pressable>
      </View>   
    </View>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    backgroundColor: 'white',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 4,
    borderColor: 'red',
    borderWidth: 1,
    height: 50,
    marginBottom: 20
  },
  input: {
    autofocus: true,
    width: "90%",
    placeholderTextColor: "#91919F",
    paddingLeft: 10,
    height: "100%",
    alignItems: 'center',
    alignContent: 'center'
  },
  
  
});
