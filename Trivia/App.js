import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from './src/screens/Welcome/Welcome';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='WelcomeScreen' component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App