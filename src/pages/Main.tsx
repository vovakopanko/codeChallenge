import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthPage from './Auth';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import SignUp from '../components/Registration/SignUp';
import SignIn from '../components/SignIn/SignIn';

const Stack = createStackNavigator();
const user = false; // mock data for register logic

const Main = () => {
  if (!user) {
    return (
      <NavigationContainer fallback={<Text>Loading...</Text>}>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={AuthPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Registration"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <Home />
    </NavigationContainer>
  );
};

export default Main;
