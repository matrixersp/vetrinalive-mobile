import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {customTheme} from 'src/styles/theme';
import React from 'react';
import ForgotPassword from 'src/screens/ForgotPassword';
import SignIn from 'src/screens/SignIn';
import SignUp from 'src/screens/SignUp';

const defaultOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator();

const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme} config={config}>
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
    </NativeBaseProvider>
  );
};

export default App;
