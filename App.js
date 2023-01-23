import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Maps, SignIn,SignUp, SavedLoc, AddMenu, Menu, Test} from './screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='Maps' component={Maps} options={{headerShown:false}}/>
        <Stack.Screen name='Saved Location' component={SavedLoc}/>
        <Stack.Screen name='AddMenu' component={AddMenu}/>
        <Stack.Screen name='Menu' component={Menu}/>
        <Stack.Screen name='Test' component={Test}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App