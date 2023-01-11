import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function Button(props) {
  return (
    <View
      style={{
        height: 45,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            alignItems: "center",
            alignVertical: "center",
          }}
        >
          {props.teks}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 45,
    width: "80%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
});
