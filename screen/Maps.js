import React, { Component } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import AnimatedLoader from "react-native-animated-loader";
import { Top } from "../comp";
import { db } from "../handler/config";
import { doc, setDoc } from "firebase/firestore";

export default class Maps extends Component {
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    hasilLongitude: 0,
    hasilLatitude: 0,
    visible: false,
  };

  SaveLoc = () => {
    let today = new Date().toUTCString();
    hasilLatitude = this.state.hasilLatitude;
    hasilLongitude = this.state.hasilLongitude;
    setDoc(doc(db, "SavedLocation", today), {
      Latitude: hasilLatitude,
      Longitude: hasilLongitude,
    })
      .then(() => {
        alert("Lokasi Tersimpan!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible,
      });
    }, 2000);
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      },
      hasilLatitude: location.coords.latitude,
      hasilLongitude: location.coords.longitude,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={"black"}></StatusBar>
        {this.state.locationResult === null ? (
          <AnimatedLoader
            visible={visible}
            overlayColor="rgba(255,255,255,0.75)"
            animationStyle={{ width: 100, height: 100 }}
            speed={1}
          >
            <Text>Mencari Lokasi Anda...</Text>
          </AnimatedLoader>
        ) : (
          <MapView
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
            region={this.state.mapRegion}
          >
            <Marker pinColor={"red"} coordinate={this.state.mapRegion} />
          </MapView>
        )}
        <View style={styles.cotainer}>
          <Top
            long={this.state.hasilLongitude}
            lati={this.state.hasilLatitude}
            onPress={() => this.SaveLoc()}
            onPress2={() => this.props.navigation.navigate("Saved Location")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1 / 3,
    height: "20%",
    width: "100%",
    justifyContent: "flex-end",
  },
});
