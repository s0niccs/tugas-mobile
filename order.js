import React, {UseState, useEffect} from 'react';
import {View, Text, TouchableOpacity,} from 'react-native';
const Order = () => {
    return (
        <View style={{flex: 1, backgroundColor:"#fff"}}>
        <View style={{flex:1, backgroundColor:"#fff"}}>
            
        </View>
        <TouchableOpacity
        style={{
            backgroundColor: 'crimson',
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 20,
            elevation: 2,
            paddingVertical: 5, 
            flex:.1
        }}>
            
        <Text style= {{fontSize: 35, color: 'white', textAlign: 'center'}}>
        Order
        </Text>
        </TouchableOpacity>


        </View>
    );
};


export default Order;
