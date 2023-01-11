import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Judul(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{props.teks}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 38,
    color: 'red',
    marginTop: 104,
    marginBottom: 39,
  },
});
