import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from './src/screens/Welcome/Welcome';
import Questions from './src/screens/Questions/Questions';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='WelcomeScreen' component={Welcome} />
        <Stack.Screen name='QuestionsScreen' component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App