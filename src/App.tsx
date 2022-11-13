import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ForgotPassword from 'src/screens/ForgotPassword';
import SignIn from 'src/screens/SignIn';
import SignUp from 'src/screens/SignUp';

const defaultOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={defaultOptions}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={defaultOptions}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
