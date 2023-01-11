import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {  Welcome, SignIn,SignUp} from './screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App