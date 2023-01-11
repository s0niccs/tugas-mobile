import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function BlankButton(props) {
  return (
    <View
      style={{
        height: 45,
        alignContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginButton: 20,
      }}
    >
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.BlackText}>{props.teks}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    height: 45,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  BlackText: {
    fontSize: 16,
    alignItems: "center",
    alignVertical: "center",
  },
});
