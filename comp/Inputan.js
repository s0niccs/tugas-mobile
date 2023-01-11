import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

const Inputan = (Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder={Props.teks}
        onChangeText={Props.onChangeText}
      />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    autofocus: true,
    width: "80%",
    height: 50,
    borderColor: "red",
    borderWidth: 1,
    placeholderTextColor: "#91919F",
    paddingLeft: 10,
    marginBottom: 20,
  },
});
