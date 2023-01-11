import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Maps, Welcome, SignIn,SignUp, SavedLoc} from './screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='Maps' component={Maps} options={{headerShown:false}}/>
        <Stack.Screen name='Saved Location' component={SavedLoc}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App